import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

const App = () => {
    const { keycloak, initialized } = useKeycloak();

    console.log("Keycloak Initialized:", initialized);
    console.log("Keycloak Authenticated:", keycloak.authenticated);

    if (!initialized) {
        return <div>Loading...</div>;
    }

    if (!keycloak.authenticated) {
        return (
            <div>
                <p>Not authenticated</p>
                <button onClick={() => keycloak.login()}>Login</button>
            </div>
        );
    }

    return (
        <div>
            <p>Welcome, {keycloak.tokenParsed?.name || 'User'}</p>
            <button onClick={() => keycloak.logout()}>Logout</button>
        </div>
    );
};

export default App;