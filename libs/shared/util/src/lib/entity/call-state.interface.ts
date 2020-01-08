export type LoadingState = 'loading' | 'resting';

export interface ErrorState {
  error: any;
}

export type CallStateUnion = LoadingState | ErrorState;

export interface CallState {
  callState: {
    single: CallStateUnion;
    batch: CallStateUnion;
  };
}
