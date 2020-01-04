import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  UserState,
  selectEntities,
  loadUsers,
  $$user,
  $curUser,
  tryLogoutUser,
  selectAllUsers
} from '@fapp/auth/data-access';
import { User } from '../..';
@Injectable({ providedIn: 'root' })
export class AuthFacade {
  uid: string = undefined;
  loggedUser$ = this.store.pipe(select($curUser));
  users$ = this.store.pipe(
    select(selectAllUsers)
    // filter(entities => entities.length > 0)
  );
  user$ = this.store.pipe(select($$user, { uid: this.uid }));

  constructor(private store: Store<UserState>) {}

  getUsers(users: User[]) {
    this.store.dispatch(loadUsers({ users }));
  }

  getUser(uid: string) {
    this.uid = uid;
  }

  logoutUser() {
    this.store.dispatch(tryLogoutUser());
  }
}
