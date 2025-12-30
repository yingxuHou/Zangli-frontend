import { NextResponse } from 'next/server';

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

        const data = await backendResponse.json();

        if (!backendResponse.ok || !data.success) {
            const errorMessage = data.error?.message || `Backend error! status: ${backendResponse.status}`;
            console.error('Backend Error:', errorMessage);
            return NextResponse.json({ success: false, error: { message: errorMessage } }, { status: backendResponse.status });
        }

        return NextResponse.json({ success: true, data: data.data });

    } catch (error: any) {
        console.error('Error forwarding to backend:', error);
        return NextResponse.json({ success: false, error: { message: error.message || 'Sorry, something went wrong.' } }, { status: 500 });
    }
}
