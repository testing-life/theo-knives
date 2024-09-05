import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { storyblokInit, apiPlugin } from '@storyblok/react';
import Page from 'components/template/Page';
import Heading from 'components/atoms/heading/heading';
import Button from 'components/atoms/button/button';
import Link from 'components/atoms/link/link';
import MainNav from 'components/molecules/mainNav/MainNav';
import Product from 'components/molecules/product/product';
import Model from 'components/molecules/model/model';
import ModelsList from 'components/molecules/modelsList/modelsList';
import HeroBanner from 'components/molecules/heroBanner/heroBanner';
import Tab from 'components/atoms/tab/tab';
import Tabs from 'components/molecules/tabs/tabs';
import { BrowserRouter } from 'react-router-dom';
import Paragraph from 'components/atoms/parapgraph/paragraph';
import ErrorBoundary from 'pages/errorBoundary/errorBoundary';
import Fallback from 'components/molecules/fallback/fallback';
// import Grid from './components/Grid';
// import Feature from './components/Feature';

storyblokInit({
  accessToken: process.env.REACT_APP_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    button: Button,
    link: Link,
    paragraph: Paragraph,
    product: Product,
    model: Model,
    tabs: Tabs,
    tab: Tab,
    'main-nav': MainNav,
    'hero-banner': HeroBanner,
    models: ModelsList,
    heading: Heading,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary fallback={<Fallback />}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
