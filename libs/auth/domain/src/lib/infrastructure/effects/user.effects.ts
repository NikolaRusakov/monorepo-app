import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  AngularFirestore
  // AngularFirestoreCollection
} from '@angular/fire/firestore';

import { User as AFUser, auth } from 'firebase/app';

import { AngularFireAuth } from '@angular/fire/auth';

import { ROUTER_NAVIGATION } from '@ngrx/router-store';

import { switchMap, map, tap } from 'rxjs/operators';
import { User } from '@fapp/auth/domain';
import {
  loadUsers,
  logoutUser,
  saveLoggedUser,
  upsertUsers,
  tryLogoutUser
} from '../actions';
import { DataPersistence } from '@nrwl/nx';
import { UserState } from '../reducers';
import { firestore } from 'firebase';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    private dataPersistence: DataPersistence<UserState>
  ) {}

  // loggedInUser$ = createEffect(() =>
  //
  //     ofType(saveLoggedUser),

  loggedInUser$ = createEffect(() =>
    // this.actions$.pipe(
    // ofType(loggedUser$),
    this.afAuth.authState.pipe(
      tap(console.log),
      map((user: AFUser) =>
        user?.providerData && user?.metadata
          ? saveLoggedUser({
              user: {
                ...user.providerData[0],
                createdAt: user?.metadata?.creationTime,
                updatedAt: '',
                docId: ''
              }
            })
          : logoutUser()
      )
    )
  );

  logoutUser = createEffect(() =>
    this.actions$.pipe(
      ofType(tryLogoutUser),
      map(async () => this.afAuth.auth.signOut()),
      map(logoutUser)
    )
  );

  loadUsers$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadUsers, ROUTER_NAVIGATION),
        switchMap(() => this.afs.collection<User>('users').snapshotChanges()),
        map(fsUsers => {
          const users = fsUsers.reduce((acc, cur) => {
            const curUser = cur.payload.doc.data({
              serverTimestamps: 'estimate'
            });
            return [...acc, { ...curUser, docId: cur.payload.doc.id }];
          }, []);
          return upsertUsers({ users });
        })
      ),
    { resubscribeOnError: true }
  );
}
