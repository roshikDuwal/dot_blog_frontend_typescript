import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "../src/styles/globals.css"
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { HelmetProvider } from 'react-helmet-async';

const breakpoints = {
  base: "0px",
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme({ breakpoints });

const queryCLient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryCLient}>
      <HelmetProvider>
        <ChakraProvider theme={theme} cssVarsRoot='#app'>
          <App />
        </ChakraProvider>
      </HelmetProvider>
    </QueryClientProvider>

  </React.StrictMode>,
)
