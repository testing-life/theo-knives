import { FilterLabelsDictionary, LanguageCode } from 'context/languageContext';
import { toNoSpaceLowercase } from './string';

export const filterByTerm = (
  array: any[],
  term: string,
  lang: LanguageCode
) => {
  return array.filter((item) => {
    if (
      (term === FilterLabelsDictionary[lang as LanguageCode].inStock &&
        item.available) ||
      toNoSpaceLowercase(item.model) === term
    ) {
      return item;
    }
  });
};
