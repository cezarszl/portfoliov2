import "./globals.css";
import React from "react";
import ContainerLayout from "./containerLayout";
import initTranslations from "@/app/i18n";
import TranslationProvider from "@/app/[locale]/components/TranslationProvider";

const i18nNamespaces = ["translation"];

export default async function Layout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationProvider
      locale={locale}
      resources={resources}
      namespaces={i18nNamespaces}
    >
      <ContainerLayout>{children}</ContainerLayout>
    </TranslationProvider>
  );
}
