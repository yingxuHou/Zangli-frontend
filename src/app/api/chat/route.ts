import { NextResponse } from 'next/server';

interface BackendResponse {
    success: boolean;
    data?: unknown;
    error?: { message: string };
}

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        // 将请求转发到Python后端
        const backendResponse = await fetch('https://astro-zangli-ai-backend.zeabur.app/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        const data: BackendResponse = await backendResponse.json();

        if (!backendResponse.ok || !data.success) {
            const errorMessage = data.error?.message || `Backend error! status: ${backendResponse.status}`;
            console.error('Backend Error:', errorMessage);
            return NextResponse.json({ success: false, error: { message: errorMessage } }, { status: backendResponse.status });
        }

        return NextResponse.json({ success: true, data: data.data });

    } catch (error) {
        console.error('Error forwarding to backend:', error);
        const errorMessage = error instanceof Error ? error.message : 'Sorry, something went wrong.';
        return NextResponse.json({ success: false, error: { message: errorMessage } }, { status: 500 });
    }
}
