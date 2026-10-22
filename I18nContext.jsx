import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { LANGS } from './i18n.js';
import { translations } from './i18n.pages.js';

const Ctx = createContext(null);
export const useI18n = () => useContext(Ctx);

const read = (k, d) => { try { return localStorage.getItem(k) || d; } catch { return d; } };

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => read('ss_lang', 'ar'));
  const [theme, setTheme] = useState(() => read('ss_theme', 'dark'));

  // t(key): current language -> English -> key itself
  const t = useCallback((k) => translations[lang]?.[k] ?? translations.en[k] ?? k, [lang]);

  useEffect(() => {
    const isRtl = LANGS[lang].dir === 'rtl';
    document.documentElement.lang = lang;
    document.documentElement.dir = LANGS[lang].dir;
    document.body.classList.toggle('rtl', isRtl);
    document.body.classList.toggle('ltr', !isRtl);
    try { localStorage.setItem('ss_lang', lang); } catch {}
  }, [lang]);

  useEffect(() => {
    document.body.classList.toggle('light-mode', theme === 'light');
    try { localStorage.setItem('ss_theme', theme); } catch {}
  }, [theme]);

  return (
    <Ctx.Provider value={{ lang, setLang, theme, toggleTheme: () => setTheme(x => x === 'dark' ? 'light' : 'dark'), t, languages: Object.keys(LANGS) }}>
      {children}
    </Ctx.Provider>
  );
}
