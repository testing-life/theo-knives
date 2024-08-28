import { useStoryblok } from '@storyblok/react';
import React, { useEffect } from 'react';

const PortfolioPage = () => {
  const story = useStoryblok('portfolio', {
    version: 'published',
  });

  useEffect(() => {
    if (story) {
      const portfolioContent = story.content.body;
      const nav = portfolioContent.filter(
        (blok: any) => blok.component === 'main-nav'
      );
      const products = portfolioContent.filter(
        (blok: any) => blok.component === 'product'
      );
      const tabs = portfolioContent.filter(
        (blok: any) => blok.component === 'tabs'
      );
      console.log('products', tabs, products, nav);
    }
  }, [story.content]);
  return <div>portfolioPage</div>;
};

export default PortfolioPage;
