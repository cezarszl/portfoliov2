import type { Metadata } from "next";
import RootLayout from "./rootlayout";
export const metadata: Metadata = {
  title: "Cezary Szal - Web Developer",
  description: "Cezary Szal - Web Developer",
};
// Import the LayoutProps type from the appropriate module

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
