import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/connectToDatabase';
import User, { IUserDetails } from '@/Models/User';

// Function to handle POST requests
export async function POST(req: NextRequest) {
  try {
    const { fullName, phoneNumber }: { fullName: string; phoneNumber: string } = await req.json();

    await connectToDatabase();

    const newRequest: IUserDetails = new User({ fullName, phoneNumber });
    await newRequest.save();

    return NextResponse.json({ message: 'Callback request saved successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to save callback request' }, { status: 500 });
  }
}

// Function to handle CORS and OPTIONS requests
export async function OPTIONS() {
  const headers = new Headers();
  headers.set('Access-Control-Allow-Credentials', 'true');
  headers.set('Access-Control-Allow-Origin', '*'); // Change '*' to your specific origin if needed
  headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');

  return new NextResponse(null, { status: 200, headers });
}

// Handle non-POST methods
export async function GET() {
  // await connectToDatabase();
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export function PUT() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export function DELETE() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
