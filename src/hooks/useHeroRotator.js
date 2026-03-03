// src/hooks/useHeroRotator.js
import { useEffect } from "react";

export function useHeroRotator() {
  useEffect(() => {
    const el = document.getElementById("heroRotatorWord");
    if (!el) return;

    const keys = ["hero.word1", "hero.word2", "hero.word3"];
    const HOLD_MS = 1400;
    const TRANS_MS = 520;

    let i = 0;
    let timer = null;

    function getLang() {
      return localStorage.getItem("site_lang") || "es";
    }

    const fallback = {
      es: { "hero.word1": "CREA", "hero.word2": "TU", "hero.word3": "WEB" },
      en: { "hero.word1": "BUILD", "hero.word2": "YOUR", "hero.word3": "SITE" },
    };

    function readWord(key) {
      const lang = getLang();
      return fallback[lang]?.[key] ?? key;
    }

    function setWordByIndex(idx) {
      const key = keys[idx % keys.length];
      el.setAttribute("data-i18n", key);
      el.textContent = readWord(key);
    }

    function show() {
      el.classList.remove("is-out");
      el.classList.add("is-in");
    }

    function hide() {
      el.classList.remove("is-in");
      el.classList.add("is-out");
    }

    function tick() {
      hide();

      window.setTimeout(() => {
        i = (i + 1) % keys.length;
        setWordByIndex(i);
        show();
      }, TRANS_MS);

      timer = window.setTimeout(tick, HOLD_MS + TRANS_MS);
    }

    function start() {
      i = 0;
      setWordByIndex(i);
      show();
      timer = window.setTimeout(tick, HOLD_MS + TRANS_MS);
    }

    function stop() {
      if (timer) window.clearTimeout(timer);
      timer = null;
    }

    function resyncOnLangChange() {
      stop();
      setWordByIndex(i);
      show();
      timer = window.setTimeout(tick, HOLD_MS + TRANS_MS);
    }

    start();

    const onStorage = (e) => {
      if (e.key === "site_lang") resyncOnLangChange();
    };
    window.addEventListener("storage", onStorage);

    return () => {
      stop();
      window.removeEventListener("storage", onStorage);
    };
  }, []);
}