import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import App from "next/app";
import { Provider as ReduxProvider, useDispatch, useSelector } from 'react-redux';
import initRedux from '../src/redux/initRedux';
import { ThemeProvider } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import createCache from '@emotion/cache';
import theme from '../src/utils/theme';
import darkTheme from '../src/utils/darkTheme';
import NProgress from 'nprogress';
import Router from 'next/router';
import { useMediaQuery } from "@mui/material";
import { getNewsData, getGlobalData } from "../src/utils/api"
import Layout from "../src/components/Layout";
import ColorModeContext from "../src/utils/ColorModeContext";

// import 'node_modules/react-modal-video/scss/modal-video.scss';
// import '../src/assets/style/main.css';
// import "../node_modules/slick-carousel/slick/slick.css";
// import "../node_modules/slick-carousel/slick/slick-theme.css";

export const cache = createCache({ key: 'css', prepend: true });

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

export default function MyApp(props) {
  const { Component, pageProps, global } = props;

  // Set dark mode based on media query
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = React.useState(prefersDarkMode);

  const [redux] = React.useState(() =>
  initRedux({ options: { userLanguage: pageProps.userLanguage } }),
  );

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  React.useEffect(() => {
    const mode = localStorage.getItem("mode") === "true";
    // set mode
    console.log(`get localStore ${mode}`);
    setDarkMode(mode);
  }, []);

  const _setDarkMode = (newmode) => {
    console.log(`set localStore ${newmode}`);
    localStorage.setItem("mode", newmode);
    setDarkMode(newmode);
  };

  console.log('Arun Jha props', props);

  return (
    <CacheProvider value={cache}>
      <Head>
        <title>My page</title>
        <link
          rel="canonical"
          href={`https://bgn.games${props.router.asPath}`}
          key="canonical"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ReduxProvider store={redux}>
      <ColorModeContext.Provider
        value={{ darkMode, setDarkMode: _setDarkMode }}
      >
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <Layout global={global}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      </ColorModeContext.Provider>
      </ReduxProvider>
    </CacheProvider>
  );
}

MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  const globalLocale = await getGlobalData()
  // Fetch global site settings from Strapi
  // const categories = await getCategories();
  // Pass the data to our page via props
  const { contentSections, metadata, localizations, slug } = globalLocale
  
  // const localizedPaths = getLocalizedPaths()
  return { ...appProps, global: globalLocale, pageProps: { path: ctx.pathname } };
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};