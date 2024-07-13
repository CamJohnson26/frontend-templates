import React, {PropsWithChildren} from "react";
import {Auth0Provider} from "@auth0/auth0-react";

export const Auth0ProviderWrapped = ({children}: PropsWithChildren) => {
    return <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN ?? ''}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID ?? ''}
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        {children}
    </Auth0Provider>
}