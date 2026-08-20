"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { messages, type Locale } from "@/lib/i18n/messages";

const STORAGE_KEY = "portfolio-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof messages)["en"];
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function detectInitialLocale(): Locale {
  if (typeof window === "undefined") return "fr";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "en" || saved === "fr") return saved;
  return navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLocaleState(detectInitialLocale());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale, ready]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: messages[locale],
    }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
