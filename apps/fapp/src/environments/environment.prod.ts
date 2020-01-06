import { AuthConfig } from '@fapp/shared/util-auth';

export const environment: {
  production: boolean;
  firebase: AuthConfig;
} = {
  production: true,
  firebase: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: ''
  }
};
