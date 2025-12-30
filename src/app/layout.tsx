import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: '藏历星图',
    description: '探索宇宙的奥秘，感受星辰的魅力',
    viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="zh-CN">
            <body className="antialiased">
                {children}
            </body>
        </html>
    )
}
