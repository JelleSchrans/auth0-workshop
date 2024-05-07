# Workshop Auth0

## Maak een account op Auth0

1. [Auth0 Sign-Up](https://auth0.com/signup?place=header&type=button&text=sign%20up)
2. Ga naar `Applications` => Maak een (frontend) application aan via Auth0.
3. Ga naar settings van frontend application:

- Allowed Callback Urls = `localhost:4200`
- Allowed Logout Urls = `localhost:4200`
- Allowed Web Origins = `localhost:4200`

3. Ga naar `APIs` => Maak een (backend) application aan via Auth0.
4. Ga naar settings van API

- Enable RBAC = `on`
- Add Permissions = `on`

## Dependencies

Dit zijn alle dependencies die nodig zijn voor backend en frontend van de demo voor Auth0.

### Frontend

- [@auth0/auth0-react](https://www.npmjs.com/package/@auth0/auth0-react)
- [@auth0/auth0-angular](https://www.npmjs.com/package/@auth0/auth0-angular)
- [@auth0/auth0-vue](https://www.npmjs.com/package/@auth0/auth0-vue)

### Backend

- [Microsoft.AspNetCore.Authentication.JwtBearer](https://www.nuget.org/packages/Microsoft.AspNetCore.Authentication.JwtBearer)

## Frontend

1. Configureer Auth0 in je front-end applicatie. Hiervoor zijn onderstaande waarden nodig:

   ```javascript
   {
   domain: '<AUTH0_DOMAIN>',
   clientId: '<AUTH0_CLIENT_ID>',
   authorizationParams: {
   redirect_uri: '<MY_CALLBACK_URL>'
   }
   }
   ```

2. Zorg dat er een mogelijkheid is om naar de inlogpagina gestuurd te worden. Dit kan bijvoorbeeld via een button o.i.d. 

3. Als er op deze button geklikt wordt, dan moet de gebruiker naar de inlogpagina van Auth0 gestuurd worden. Vanuit deze UI kan de gebruiker inloggen, maar kunnen ook nieuwe gebruikers aangemaakt worden. Op dit moment zullen er nog geen gebruikers zijn, dus moet er eerst een gebruiker aangemaakt worden.

4. Als de gebruiker ingelogd is of zich geregistreerd heeft, dan moet de gebruiker terug naar de applicatie gestuurd worden. Hiervoor is de callback url die eerder is geconfigureerd van belang. Auth0 stuurt de gebruiker terug naar deze callback url.

5. De Auth0 package biedt de mogelijkheid om informatie over de gebruiker op te halen. Dit kan bijvoorbeeld gebruikt worden om de naam van de gebruiker te tonen, zodat de gebruiker weet dat hij/zij ingelogd is. 

6. Een gebruiker wil natuurlijk ook weer uit kunnen loggen. Auth0 biedt hiervoor een functie die de gebruiker uitlogt, deze heet simpelweg `logout()`. 


## Backend

1. Als het inloggen werkt, dan kan er in de `Program.cs` de authentication en authorization uitgecomment worden.

2. Voeg in de `appsettings.json` de juiste data in die je op auth0 hebt gebruikt: domein & audience.

3. Ga naar de controller en comment de authorization annotaties uit.
