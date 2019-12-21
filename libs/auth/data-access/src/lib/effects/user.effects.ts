import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';

import { addUsers, loadUsers, upsertUsers } from '../actions/user.actions';
import { switchMap, map, tap } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private afs: AngularFirestore) {}

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
