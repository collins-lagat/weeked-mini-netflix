// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDbBEghULz9zSQk-lTw_mZvP_gLxsLCeaM',
    authDomain: 'weeked-mini-netflix-alc-4.firebaseapp.com',
    databaseURL: 'https://weeked-mini-netflix-alc-4.firebaseio.com',
    projectId: 'weeked-mini-netflix-alc-4',
    storageBucket: 'weeked-mini-netflix-alc-4.appspot.com',
    messagingSenderId: '817648619412',
    appId: '1:817648619412:web:5a6470374f3a190b6fc981'
  },
  movie_api: 'fff00a24b8c6e3e1f2bac3ddfe344879',
  defaultUser: {
      email: 'johndoe@securemail.com',
      password: 'QLCJDp7H'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
