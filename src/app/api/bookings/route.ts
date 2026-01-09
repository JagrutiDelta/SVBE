import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, business, attendees, bookingRef } = body;

        const booking = await prisma.booking.create({
            data: {
                name,
                email,
                phone,
                business,
                attendees,
                bookingRef,
            },
        });

        return NextResponse.json(booking);
    } catch (error) {
        console.error('Error saving booking:', error);
        return NextResponse.json(
            { error: 'Error creating booking' },
            { status: 500 }
        );
    }
}
