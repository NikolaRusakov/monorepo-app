import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, map, tap, timeout } from 'rxjs/operators';
import {
  EntityCollectionDataService,
  HttpMethods,
  QueryParams,
  HttpUrlGenerator,
  Logger,
  RequestData,
  DataServiceError
} from '@ngrx/data';
import { Users } from './users';

@Injectable({ providedIn: 'root' })
export class UsersDataService<T> extends EntityCollectionDataService<Users> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    logger: Logger
  ) {
    super('Hero', http, httpUrlGenerator);
    logger.log('Created custom Hero EntityDataService');
  }
  // constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
  //   super('Users', serviceElementsFactory);
  // }

  protected execute(
    method: HttpMethods,
    url: string,
    data?: any, // data, error, or undefined/null
    options?: any
  ): Observable<any> {
    const req: RequestData = { method, url, data, options };

    if (data instanceof Error) {
      return this.handleError(req)(data);
    }

    let result$: Observable<ArrayBuffer>;

    switch (method) {
      case 'DELETE': {
        result$ = this.http.delete(url, options);
        if (super.saveDelay) {
          result$ = result$.pipe(delay(super.saveDelay));
        }
        break;
      }
      case 'GET': {
        result$ = this.http.get(url, options);
        if (super.getDelay) {
          result$ = result$.pipe(delay(super.getDelay));
        }
        break;
      }
      case 'POST': {
        result$ = this.http.post(url, data, options);
        if (super.saveDelay) {
          result$ = result$.pipe(delay(super.saveDelay));
        }
        break;
      }
      // N.B.: It must return an Update<T>
      case 'PUT': {
        result$ = this.http.put(url, data, options);
        if (super.saveDelay) {
          result$ = result$.pipe(delay(super.saveDelay));
        }
        break;
      }
      default: {
        const error = new Error('Unimplemented HTTP method, ' + method);
        result$ = throwError(error);
      }
    }
    if (super.timeout) {
      result$ = result$.pipe(timeout(super.timeout + super.saveDelay));
    }
    return result$.pipe(catchError(this.handleError(req)));
  }

  private handleError(reqData: RequestData) {
    return (err: any) => {
      const ok = this.handleDelete404(err, reqData);
      if (ok) {
        return ok;
      }
      const error = new DataServiceError(err, reqData);
      return throwError(error);
    };
  }

  private handleDelete404(error: HttpErrorResponse, reqData: RequestData) {
    if (
      error.status === 404 &&
      reqData.method === 'DELETE' &&
      super.delete404OK
    ) {
      return of({});
    }
    return undefined;
  }

}
