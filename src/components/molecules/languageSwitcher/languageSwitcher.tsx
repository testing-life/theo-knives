import Select from 'components/select/select';
import {
  LanguageCode,
  LanguageDictionary,
  useLanguage,
} from 'context/languageContext';
import React from 'react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <form className='theo-language'>
      {/* <label htmlFor='lang'>{language === 'de' ? 'Sprache' : 'Language'}</label>
      <select
        value={language as string}
        id='lang'
        onChange={(e) => setLanguage(e.target.value as LanguageCode)}
      >
        {Object.entries(LanguageDictionary).map(([code, label]) => (
          <option value={code}>{label}</option>
        ))}
      </select> */}
      <Select<typeof LanguageDictionary, LanguageCode>
        options={LanguageDictionary}
        value={language}
        label={language === 'de' ? 'Sprache' : 'Language'}
        changeHandler={setLanguage}
        id='lang'
      />
    </form>
  );
};

export default LanguageSwitcher;
