import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { name, email, message } = await request.json();

        // Validate the data
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Using a simple mailto approach as fallback
        // Since we can't send server-side emails without SMTP config,
        // let's use Formspree which is free and requires no setup
        // Form ID: You need to create a form at formspree.io and use the form ID
        // For now, using a direct email approach

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);
        formData.append('_replyto', email);
        formData.append('_subject', `New Contact Form - SVBE 2026 - ${name}`);

        // Using Formspree's endpoint - you'll need to verify email once
        const response = await fetch('https://formspree.io/f/mldebazr', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            return NextResponse.json(
                { success: true, message: 'Message sent successfully!' },
                { status: 200 }
            );
        } else {
            throw new Error('Failed to send email');
        }

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to send message. Please try again.' },
            { status: 500 }
        );
    }
}
