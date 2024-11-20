"use client";
import { useRouter, usePathname } from "next/navigation";
import i18nConfig from "@/app/i18nConfig";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";
import ReactCountryFlag from "react-country-flag";

export default function LanguageSwitcher() {
  const router = useRouter();
  const currentPathname = usePathname();
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const handleChange = useCallback(
    (newLocale: string) => () => {
      const days = 30;
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = "; expires=" + date.toUTCString();

      // Ustawienie ciasteczka z dodatkowymi opcjami
      document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/;Secure;SameSite=Lax`;

      // Aktualizacja ścieżki
      const updatedPathname = currentPathname.startsWith(`/${currentLocale}`)
        ? currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
        : `/${newLocale}${currentPathname}`;

      router.push(updatedPathname);
      i18n.changeLanguage(newLocale); // Dynamiczna zmiana języka
    },
    [currentLocale, currentPathname, router, i18n]
  );

  return (
    <div className="flex flex-row gap-4 p-4">
      <ReactCountryFlag
        countryCode="GB"
        svg
        className="!w-8 !h-8 cursor-pointer"
        aria-label="Switch to English"
        title="UK"
        onClick={handleChange("en")}
      />
      <ReactCountryFlag
        countryCode="DE"
        svg
        className="!w-8 !h-8 cursor-pointer"
        aria-label="Switch to German"
        title="DE"
        onClick={handleChange("de")}
      />
    </div>
  );
}
