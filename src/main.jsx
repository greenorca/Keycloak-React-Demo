import { createRoot } from 'react-dom/client'
import './index.css'

import { ReactKeycloakProvider, useKeycloak } from '@react-keycloak/web';
import Keycloak from "keycloak-js";
import App from './App';

const keycloakConfig = new Keycloak({
    realm: 'myrealm',
    url: 'http://localhost:8080/',
    clientId: 'demo_client'
});

const root = createRoot(document.getElementById('root'));
root.render(
    <ReactKeycloakProvider authClient={keycloakConfig}
        initOptions={{ 
            onLoad: 'login-required',  // Forces login if not authenticated
            checkLoginIframe: false,   // Avoids infinite loops
            pkceMethod: 'S256',        // Helps with authentication security (optional)
            redirectUri: window.location.origin // Ensures proper redirection
      }}>
        <App />
    </ReactKeycloakProvider>
);
