import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { storyblokInit, apiPlugin } from '@storyblok/react';
import Page from 'components/template/Page';
import Heading from 'components/atoms/Heading';
import Button from 'components/atoms/button/button';
import Link from 'components/atoms/link/link';
import MainNav from 'components/molecules/mainNav/MainNav';
import Product from 'components/molecules/product/product';
import Model from 'components/molecules/model/model';
import ModelsList from 'components/molecules/modelsList/modelsList';
import HeroBanner from 'components/molecules/heroBanner/heroBanner';
// import Grid from './components/Grid';
// import Feature from './components/Feature';

storyblokInit({
  accessToken: 'Yg0RlkdoBtQa0vGTYexlmwtt',
  use: [apiPlugin],
  components: {
    heading: Heading,
    page: Page,
    button: Button,
    link: Link,
    product: Product,
    model: Model,
    'main-nav': MainNav,
    'hero-banner': HeroBanner,
    models: ModelsList,
    // teaser: Teaser,
    // grid: Grid,
    // feature: Feature,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
