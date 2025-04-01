'use client';

import Script from 'next/script';

interface GoogleTagManagerProps {
    tagManagerId: string;
}

export default function GoogleTagManager({ tagManagerId }: GoogleTagManagerProps) {
    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${tagManagerId}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${tagManagerId}');
                `}
            </Script>
        </>
    );
} 