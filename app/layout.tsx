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
      <body>{children}</body>
    </html>
  );
}
