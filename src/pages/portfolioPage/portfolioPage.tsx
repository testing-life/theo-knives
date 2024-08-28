import { useStoryblok } from '@storyblok/react';
import Footer from 'components/molecules/footer/footer';
import MainNav from 'components/molecules/mainNav/MainNav';
import Product from 'components/molecules/product/product';
import Tabs from 'components/molecules/tabs/tabs';
import React, { useEffect, useState } from 'react';

const PortfolioPage = () => {
  const [nav, setNav] = useState();
  const [tabs, setTabs] = useState();
  const [products, setProducts] = useState();

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
      }
    }
  }, [story.content]);

  const filterProducts = (model: string) => {
    console.log('model', model);
  };

  return (
    <section>
      {nav && <MainNav blok={nav} />}
      {tabs && <Tabs blok={tabs} onSelect={filterProducts} />}
      {products && <Product blok={products[0]} />}
      <Footer />
    </section>
  );
};

export default PortfolioPage;
