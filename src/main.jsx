import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css'; // Import Mantine styles

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-8d1x5soeweuh8uk0.us.auth0.com"
      clientId="iZxBzyDaBb9iyx77yERT2Fx5StmLYMOb"
      authorizationParams={{
        redirect_uri: "http://localhost:5173",
      }}
      audience="http://localhost:8080"
      scope="openid profile email"
    >
      <MantineProvider
        theme={{ colorScheme: 'light' }} // Explicitly set the theme to light
        withGlobalStyles
        withNormalizeCSS
      >
        <App />
      </MantineProvider>
    </Auth0Provider>
  </StrictMode>
);
