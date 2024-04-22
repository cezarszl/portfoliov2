// app/components/LanguageSwitcher.tsx
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
      document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

      if (currentLocale === i18nConfig.defaultLocale) {
        router.push("/" + newLocale + currentPathname);
      } else {
        router.push(
          currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
        );
      }

      router.refresh();
    },
    [currentLocale, currentPathname, router]
  );
  return (
    <div className="flex flex-row gap-4 p-4">
      <ReactCountryFlag
        countryCode="GB"
        svg
        style={{
          width: "2em",
          height: "2em",
        }}
        title="UK"
        onClick={handleChange("en")}
      />
      <ReactCountryFlag
        countryCode="DE"
        svg
        style={{
          width: "2em",
          height: "2em",
        }}
        title="DE"
        onClick={handleChange("de")}
      />
    </div>
  );
}
