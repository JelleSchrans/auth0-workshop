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

5. Ga naar `Permissions` => Maak een permission aan: read:authorization.

## Dependencies

Dit zijn alle dependencies die nodig zijn voor backend en frontend van de demo voor Auth0.

### Frontend

- [@auth0/auth0-react](https://www.npmjs.com/package/@auth0/auth0-react)
- [@auth0/auth0-angular](https://www.npmjs.com/package/@auth0/auth0-angular)
- [@auth0/auth0-vue](https://www.npmjs.com/package/@auth0/auth0-vue)

### Backend

- [Microsoft.AspNetCore.Authentication.JwtBearer](https://www.nuget.org/packages/Microsoft.AspNetCore.Authentication.JwtBearer)

## Frontend

1. Installeer de benodigde package, en configureer Auth0 in je front-end applicatie. Hiervoor zijn onderstaande waarden nodig:

   ```javascript
   {
   domain: '<AUTH0_DOMAIN>',
   clientId: '<AUTH0_CLIENT_ID>',
   authorizationParams: {
   redirect_uri: '<MY_CALLBACK_URL>'
   }
   }
   ```

   In de link naar de voor jou benodigde package staat beschreven hoe je dit voor jou framework kan configureren.

2. Zorg dat er een mogelijkheid is om naar de inlogpagina gestuurd te worden. Bijvoorbeeld via een button o.i.d.

   Als er op deze button geklikt wordt, dan moet de gebruiker naar de inlogpagina van Auth0 gestuurd worden. Vanuit deze UI kan de gebruiker inloggen, maar kunnen ook nieuwe gebruikers aangemaakt worden. Op dit moment zullen er nog geen gebruikers zijn, dus moet er eerst een gebruiker aangemaakt worden. Gebruik onderstaande code om de gebruiker naar de inlogpagina te sturen.

   ```javascript
   // React
   const { loginWithRedirect } = useAuth0();

   // Angular
   constructor(public auth: AuthService) {}
   loginWithRedirect(): void {
   this.auth.loginWithRedirect();
   }

   // Vue
   const { loginWithRedirect } = useAuth0();
   //of
   this.$auth.loginWithRedirect();

   ```

3. Als de gebruiker ingelogd is of zich geregistreerd heeft, dan moet de gebruiker terug naar de applicatie gestuurd worden. Hiervoor is de callback url die eerder is geconfigureerd van belang. Auth0 stuurt de gebruiker terug naar deze url nadat een gebruiker de benodigde acties heeft uitgevoerd. 

4. De Auth0 package biedt de mogelijkheid om informatie over de gebruiker op te halen. Dit kan bijvoorbeeld gebruikt worden om de naam van de gebruiker te tonen, zodat de gebruiker weet dat hij/zij ingelogd is.

```javascript
// React
const { user } = useAuth0();

//Angular
constructor(public auth: AuthService) {}
user$ = this.auth.user$;

// Vue
const { user } = useAuth0();
//of
this.$auth.user;
```

Via isAuthenticated kan gecheckt worden of er ingelogd is.

5. Een gebruiker wil natuurlijk ook weer uit kunnen loggen. Auth0 biedt hiervoor een functie die de gebruiker uitlogt, deze heet simpelweg `logout()`. Ook hier zal de gebruiker naar de eerder geconfigureerde callback url gestuurd worden.

6. Als je zo dadelijk de API aan wilt roepen, dan moet je een token meesturen. Dit token kan je ophalen via de frontend d.m.v `getAccessTokenSilently()`. D.m.v van dit token wordt gecontroleerd of de gebruiker de juiste rechten heeft om bepaalde acties uit te voeren.

## Backend

1. Ga naar de `.sln` file van de backend. Als het inloggen werkt, dan kan er in de `Program.cs` de authentication en authorization uitgecomment worden. Installeer vervolgens het eerder benoemde package in de solution.

2. Voeg in de `appsettings.json` de juiste data in die je op auth0 hebt gebruikt: domein & audience.

3. Ga naar de controller en comment de authorization annotaties uit.

4. Zorg dat je ingelogd bent, en roep het /authenticate endpoint aan. Je zal zien dat deze wel werkt. Roep daarna het /authorize endpoint aan, en je zal zien dat deze niet werkt.

5. Om het /authorize endpoint te laten werken, moet je de eerder gemaakte permission toevoegen aan de gebruiker. Dit kan via de Auth0 UI. Ga naar `Users & Roles` => `Users (kies hier de eerder gemaakte user)` => `Permissions` => `Add Permissions` => `read:authorization`. 

6. Als je nu het /authorize endpoint aanroept, zal je zien dat deze wel werkt.