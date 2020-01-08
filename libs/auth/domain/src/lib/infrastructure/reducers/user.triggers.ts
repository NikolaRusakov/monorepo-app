import  * as userAction from '../actions';

export const usersCallStateTriggers = {
  single: {
    loading: [userAction.loadUser.type],
    resting: [userAction.loadedUser.type],
    erroring: [userAction.loadUserError.type]
  },
  batch: {
    loading: [userAction.loadUsers.type],
    resting: [userAction.loadedUsers.type],
    erroring: [userAction.loadUsersError.type]
  },
};


// export const moviesCallStateTriggers = {
//   single: {
//     loading: [userAction..MoviesRouteRequestedOneMovies],
//     resting: [MoviesActionTypes.MoviesApiOneLoaded],
//     erroring: [MoviesActionTypes.MoviesApiOneLoadError].
//   },
//   batch: {
//     loading: [MoviesActionTypes.MoviesRouteRequestedAllMovies],
//     resting: [MoviesActionTypes.MoviesApiAllLoaded],
//     erroring: [MoviesActionTypes.MoviesApiAllLoadError],
//   },
// };
