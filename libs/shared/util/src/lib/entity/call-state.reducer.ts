import {
  Action,
  ActionReducer,
  MemoizedSelector,
  createSelector,
} from '@ngrx/store';
import { CallState, CallStateUnion } from '@fapp/shared/util';
import { TypedAction } from '@ngrx/store/src/models';

export interface Triggers {
  loading: string[];
  resting: string[];
  erroring: string[];
}

export function callStateReducer<S extends CallState, A extends Action>(
  baseReducer: ActionReducer<S, A>,
  {
    single,
    batch,
  }: {
    single?: Triggers;
    batch?: Triggers;
  },
) {
  return (state: S, action: A) => {
    const singleCallState = extractCallState(single, action);
    const batchCallState = extractCallState(batch, action);

    return baseReducer(
      singleCallState || batchCallState
        ? {
          ...state,
          callState: {
            single: singleCallState || state.callState.single,
            batch: batchCallState || state.callState.batch,
          },
        }
        : state,
      action,
    );
  };
}

function extractCallState(triggers, action): CallStateUnion | null {
  if (!triggers) {
    return null;
  }

  switch (true) {
    case triggers.loading.includes(action.type):
      return 'loading';

    case triggers.resting.includes(action.type):
      return 'resting';

    case triggers.erroring.includes(action.type):
      return (<{ error?: any }>action).error;

    default:
      return null;
  }
}

export function getCallStateError(callState: CallStateUnion) {
  if (typeof callState === 'string') {
    return null;
  }

  return callState.error;
}

export function getCallStateSelectors<T extends CallState>(
  featureSelector: MemoizedSelector<object, T>,
) {
  const getCallState = createSelector(
    featureSelector,
    featureState => featureState.callState,
  );

  const isSingleLoading = createSelector(
    getCallState,
    callState => callState.single === 'loading',
  );

  const isSingleResting = createSelector(
    getCallState,
    callState => callState.single === 'resting',
  );

  const getSingleError = createSelector(
    getCallState,
    callState => getCallStateError(callState.single),
  );

  const isBatchLoading = createSelector(
    getCallState,
    callState => callState.batch === 'loading',
  );

  const isBatchResting = createSelector(
    getCallState,
    callState => callState.batch === 'resting',
  );

  const getBatchError = createSelector(
    getCallState,
    callState => getCallStateError(callState.batch),
  );

  return {
    isSingleLoading,
    isSingleResting,
    getSingleError,
    isBatchLoading,
    isBatchResting,
    getBatchError,
  };
}

export const initialCallState: CallState = {
  callState: {
    single: 'resting',
    batch: 'resting',
  },
};
