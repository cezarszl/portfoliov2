import type { Metadata } from "next";
import i18nConfig from "@/app/i18nConfig";

export const metadata: Metadata = {
  title: "Cezary Szal - Web Developer",
  description: "Cezary Szal - Web Developer",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <head>
       <script dangerouslySetInnerHTML={{ __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5MP9792D');
        ` }} />
      </head>
  
      <body>
        
             <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5MP9792D"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        
        
        {children}
   
      </body>
    </html>
  );
}
