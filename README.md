# Workshop Auth0

## Maak een account op Auth0

1. [Auth0 Sign-Up](https://auth0.com/signup?place=header&type=button&text=sign%20up)
2. Ga naar `Applications` => Maak een (frontend) application aan via Auth0.
3. Ga naar settings van frontend application:
- Allowed Callback Urls = `localhost:3000`
- Allowed Logout Urls = `localhost:3000`
- Allowed Web Origins = `localhost:3000`
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

1. benoem hier stappen...

## Backend

1. Als het inloggen werkt, dan kan er in de `Program.cs` de authentication en authorization uitgecomment worden.

2. Voeg in de `appsettings.json` de juiste data in die je op auth0 hebt gebruikt: domein & audience.

3. Ga naar de controller en comment de authorization annotaties uit.