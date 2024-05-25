import type { Metadata } from 'next';
import i18nConfig from '@/app/i18nConfig';
import { ReactNode } from 'react';
import { GoogleTagManager } from '@next/third-parties/google' 


export const metadata: Metadata = {
  title: 'Cezary Szal - Web Developer',
  description: 'Cezary Szal - Web Developer',
};
export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
   <html lang={locale}>
     <GoogleTagManager gtmId="GTM-5MP9792D" />
      <body>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5MP9792D" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        {children}
      </body>
    </html>
  );
}
