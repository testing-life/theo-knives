import { FilterLabelsDictionary, LanguageCode } from 'context/languageContext';
import { toNoSpaceLowercase } from './string';
import { ProductStoryblok } from 'types/component-types-sb';

export const filterProductsByTerm = (
  array: ProductStoryblok[],
  term: string,
  lang: LanguageCode
): ProductStoryblok[] => {
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
