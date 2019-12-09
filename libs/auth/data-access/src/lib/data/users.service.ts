import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Users } from './users';

@Injectable({ providedIn: 'root' })
export class UsersService extends EntityCollectionServiceBase<Users> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Users', serviceElementsFactory);
  }
}
