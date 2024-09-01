import React, {
  ChangeEvent,
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';

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
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  return { language, setLanguage };
};
