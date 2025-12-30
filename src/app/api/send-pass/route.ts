
import { Resend } from 'resend';
import { NextResponse } from 'next/server';



export async function POST(req: Request) {
    try {
        if (!process.env.RESEND_API_KEY) {
            return NextResponse.json({ error: 'Resend API key is not configured' }, { status: 500 });
        }

        const { email, name, bookingRef, passImage } = await req.json();

        const resend = new Resend(process.env.RESEND_API_KEY);

        // DEBUG: Log the key prefix to verify it loaded
        const keyPrefix = process.env.RESEND_API_KEY.substring(0, 8);
        console.log(`[SendPass] Processing request with Key Prefix: ${keyPrefix}...`);
        console.log(`[SendPass] To: ${email}, Name: ${name}`);

        // SIMULATION MODE: If using the placeholder key, pretend to send
        if (process.env.RESEND_API_KEY.includes('placeholder')) {
            console.log('--- SIMULATING EMAIL SEND ---');
            console.log(`To: ${email}`);
            console.log(`Subject: Your Entry Pass for Business Expo 2026`);
            console.log('--- END SIMULATION ---');

            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            return NextResponse.json({
                data: { id: 'simulated_email_id' },
                isSimulated: true
            });
        }

        // In a real scenario, you'd send an email with the pass attached or embedded
        // For now, we'll provide the implementation pattern
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: [email],
            subject: 'Your Entry Pass for Business Expo 2026',
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; borderRadius: 10px;">
          <h2 style="color: #800000;">Confirmation & Invitation</h2>
          <p>Hi ${name},</p>
          <p>You are cordially invited to the <strong>Shree Vishwakarma Business Expo 2026</strong>. We are thrilled to confirm your registration.</p>
          <p>Your Booking Reference: <strong>#${bookingRef}</strong></p>
          <p>Please find your official entry pass attached to this email. Kindly present this pass at the registration desk for entry.</p>
          <div style="margin-top: 30px; padding: 20px; background: #f9f9f9; text-align: center; border-radius: 8px;">
            <p style="font-size: 16px; color: #333; margin-bottom: 5px;"><strong>Date:</strong> 11th & 12th April, 2026</p>
            <p style="font-size: 16px; color: #333;"><strong>Venue:</strong> Helipad Exhibition Centre, Gandhinagar</p>
            <p style="font-size: 14px; color: #666; margin-top: 15px;">We look forward to welcoming you!</p>
          </div>
        </div>
      `,
            attachments: [
                {
                    filename: `Expo_Pass_${bookingRef}.png`,
                    content: passImage.split(',')[1], // Remove the data:image/png;base64, prefix
                },
            ],
        });

        if (error) {
            console.error('Error sending email via Resend:', error);
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json({ data });
    } catch (err) {
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
