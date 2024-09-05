import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

export const LanguageDictionary = {
  'en-gb': 'English',
  de: 'Deutsch',
} as const;

export type LanguageCode = keyof typeof LanguageDictionary;
export type LanguageValue = (typeof LanguageDictionary)[LanguageCode];

type LangContext = {
  language: LanguageCode | undefined;
  setLanguage: (val: LanguageCode) => void;
};

const LanguageContext = createContext<LangContext>({} as LangContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LanguageCode>();

  const value = useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage]
  );
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  return { language, setLanguage };
};
