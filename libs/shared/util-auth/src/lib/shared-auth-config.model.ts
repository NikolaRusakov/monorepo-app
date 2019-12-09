import { InjectionToken } from '@angular/core';

export interface AuthConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

export type AuthConfigType<T extends any> = T & AuthConfig;
export const APP_CONFIG = <T>() =>
  new InjectionToken<AuthConfigType<T>>('app.config');
