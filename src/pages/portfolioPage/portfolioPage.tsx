import { useStoryblok } from '@storyblok/react';
import Footer from 'components/molecules/footer/footer';
import MainNav from 'components/molecules/mainNav/MainNav';
import Product from 'components/molecules/product/product';
import Tabs from 'components/molecules/tabs/tabs';
import React, { useEffect, useState } from 'react';
import './portfolioPage.css';
import { toNoSpaceLowercase } from 'utils/string';
import { useSearchParams } from 'react-router-dom';

const PortfolioPage = () => {
  const [nav, setNav] = useState();
  const [tabs, setTabs] = useState();
  const [filter, setFilter] = useState('all');
  const [products, setProducts] = useState<unknown[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<unknown[]>([]);
  const [param] = useSearchParams();

  const story = useStoryblok('/portfolio', {
    version: 'published',
  });

  useEffect(() => {
    if (story.content) {
      const portfolioContent = story.content.body;
      const nav = portfolioContent?.filter(
        (blok: any) => blok.component === 'main-nav'
      )[0];
      const products = portfolioContent?.filter(
        (blok: any) => blok.component === 'product'
      );
      const tabs = portfolioContent?.filter(
        (blok: any) => blok.component === 'tabs'
      )[0];
      if (nav) {
        setNav(nav);
      }
      if (tabs) {
        setTabs(tabs);
      }
      if (products) {
        setProducts(products);
        setFilteredProducts(products);
      }
    }
  }, [story.content]);

  const filterProducts = (filter: string) => {
    if (filter === 'all') {
      setFilteredProducts(products);
      return;
    }

    const newData = products.filter((product: any) => {
      if (
        (filter === 'instock' && product.available) ||
        toNoSpaceLowercase(product.model) === filter
      ) {
        return product;
      }
    });
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

  return (
    <>
      <main className='theo-page'>
        <section>
          {nav && <MainNav blok={nav} />}
          {tabs && (
            <Tabs
              blok={tabs}
              paramFilter={filter}
              onSelect={(value) => setFilter(value)}
            />
          )}
          <ul>
            {filteredProducts.map((product) => (
              <li className='-mb-1rem'>
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
