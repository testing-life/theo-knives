import Select from 'components/atoms/select/select';
import {
  LanguageCode,
  LanguageDictionary,
  useLanguage,
} from 'context/languageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <form className='theo-language'>
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
