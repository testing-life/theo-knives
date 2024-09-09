import { useStoryblok } from '@storyblok/react';
import Footer from 'components/molecules/footer/footer';
import MainNav from 'components/molecules/mainNav/MainNav';
import Product from 'components/molecules/product/product';
import Tabs from 'components/molecules/tabs/tabs';
import { useEffect, useMemo, useState } from 'react';
import './portfolioPage.css';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import {
  FilterLabelsDictionary,
  LanguageCode,
  useLanguage,
} from 'context/languageContext';
import { getComponent } from 'utils/blok';
import { filterProductsByTerm } from 'utils/filter';
import { ProductStoryblok } from 'types/component-types-sb';

const PortfolioPage = () => {
  const [nav, setNav] = useState();
  const [tabs, setTabs] = useState();
  const [products, setProducts] = useState<ProductStoryblok[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductStoryblok[]>(
    []
  );
  const [param] = useSearchParams();
  const { language, setLanguage } = useLanguage();
  const { lang } = useParams();
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  const story = useStoryblok('/portfolio', {
    version: 'published',
    language: lang,
  });

  const mainNav = useMemo(
    () => (story.content ? getComponent(story, 'main-nav') : null),
    [story.content]
  );
  const productsList = useMemo(
    () => (story.content ? getComponent(story, 'product', true) : null),
    [story.content]
  );
  const tabsFilters = useMemo(
    () => (story.content ? getComponent(story, 'tabs') : null),
    [story.content]
  );

  useEffect(() => {
    throw new Error('fallback tes');

    if (story.content) {
      if (mainNav) {
        setNav(mainNav);
      }
      if (tabsFilters) {
        setTabs(tabsFilters);
      }
      if (productsList) {
        setProducts(productsList);
        setFilteredProducts(productsList);
      }
    }
  }, [tabsFilters, productsList, mainNav]);

  const filterProducts = (filter: string) => {
    if (
      filter ===
      FilterLabelsDictionary[
        (lang as LanguageCode) || (language as LanguageCode)
      ].all
    ) {
      setFilteredProducts(products);
      return;
    }

    const newData = filterProductsByTerm(
      products,
      filter,
      (lang as LanguageCode) || (language as LanguageCode)
    );

    setFilteredProducts(newData);
  };

  useEffect(() => {
    if (filteredProducts.length) {
      filterProducts(filter as string);
    }
  }, [, filteredProducts.length, filter]);

  useEffect(() => {
    if (param.has('model')) {
      const paramFilter = param.get('model');
      setFilter(paramFilter as string);
    }
  }, [param.has('model')]);

  useEffect(() => {
    if (lang && !language) {
      setLanguage(lang as LanguageCode);
    }
    if (language && language !== lang) {
      navigate(`/${language}/portfolio`, { replace: true });
    }

    if (!param.has('model')) {
      if ((!filter && lang) || language) {
        setFilter(
          FilterLabelsDictionary[
            (lang as LanguageCode) || (language as LanguageCode)
          ].all
        );
      }
    }
  }, [lang, language]);

  return (
    <>
      <main className='theo-page'>
        <section>
          {nav && <MainNav blok={nav} />}
          {tabs && (
            <Tabs
              blok={tabs}
              paramFilter={
                filter ||
                FilterLabelsDictionary[
                  (lang as LanguageCode) || (language as LanguageCode)
                ].all
              }
              onSelect={(value) => setFilter(value)}
            />
          )}
          <ul>
            {filteredProducts.map((product) => (
              <li key={(product as ProductStoryblok)._uid} className='-mb-1rem'>
                <Product blok={product} />
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PortfolioPage;
