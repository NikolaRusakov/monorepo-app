import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as UserActions from '../actions/user.actions';
import { User } from '@fapp/auth/domain';

export const usersFeatureKey = 'users';

export interface UserState extends EntityState<User> {
  // additional entities state properties
  collectionId: string;
  curUser: User;
}

export function selectUserId(a: User): string {
  return a.uid;
}

export function sortByName(a: User, b: User): number {
  return a.displayName.localeCompare(b.displayName);
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: selectUserId,
  sortComparer: sortByName
});

export const initialState: UserState = adapter.getInitialState({
  // additional entity state properties
  collectionId: '',
  curUser: {
    uid: '',
    docId: '',
    displayName: '',
    phoneNumber: '',
    photoURL: '',
    email: '',
    providerId: ''
  }
});

const userReducer = createReducer(
  initialState,
  on(UserActions.addUser, (state, action) =>
    adapter.addOne(action.user, state)
  ),
  on(UserActions.upsertUser, (state, action) =>
    adapter.upsertOne(action.user, state)
  ),
  on(UserActions.saveLoggedUser, (state, { user }) => ({
    ...state,
    curUser: { ...user }
  })),
  on(UserActions.logoutUser, state => ({
    ...state,
    curUser: null
  })),
  on(UserActions.addUsers, (state, action) =>
    adapter.addMany(action.users, state)
  ),
  on(UserActions.upsertUsers, (state, action) =>
    adapter.upsertMany(action.users, state)
  ),
  on(UserActions.updateUser, (state, action) =>
    adapter.updateOne(action.user, state)
  ),
  on(UserActions.updateUsers, (state, action) =>
    adapter.updateMany(action.users, state)
  ),
  on(UserActions.deleteUser, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(UserActions.deleteUsers, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(UserActions.loadUsers, (state, action) =>
    adapter.addAll(action.users, state)
  ),
  on(UserActions.clearUsers, state => adapter.removeAll(state))
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
