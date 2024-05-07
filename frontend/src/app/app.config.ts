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
      domain: 'dev-62x3htw4jzlvmjkh.us.auth0.com',
      clientId: 'iCrOYp2gxJOQ75P47buRGeoqo3wyjptT',
      authorizationParams: {
        redirect_uri: 'http://localhost:4200',
      },
    }),
  ],
};
