"use client";

import { useEffect } from "react";

/** Nested layouts cannot change <html lang>; set it on the client for /ro/* routes. */
export function SetHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const previous = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = previous || "en";
    };
  }, [lang]);

  return null;
}
