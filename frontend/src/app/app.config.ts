import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAuth0 } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAuth0({
      domain: 'YOUR_DOMAIN.auth0.com',
      clientId: 'YOUR_CLIENT_ID',
      authorizationParams: {
        redirect_uri: 'http://localhost:4200',
        audience: 'http://localhost:7000', 
      },
    }),
  ],
};
