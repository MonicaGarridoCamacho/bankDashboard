// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  login: false,
  appID: {
    clientId: '03e82b0d-a368-42a6-9d81-9a0391e8592d',
    discoveryEndpoint: 'https://us-south.appid.cloud.ibm.com/oauth/v4/ff2d5da9-4499-4ef0-9fc6-7e280c05ea9c/.well-known/openid-configuration'
  },
  websocket: 'http://banking-16-alpha.apps.cluster-dw8rc.dw8rc.sandbox2609.opentlc.com',
  backend: 'http://banking-16-alpha.apps.cluster-dw8rc.dw8rc.sandbox2609.opentlc.com'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

