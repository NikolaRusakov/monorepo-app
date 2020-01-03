import { InjectionToken } from '@angular/core';
import { FirebaseOptions } from '@angular/fire';

export interface AuthConfig extends FirebaseOptions {
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
