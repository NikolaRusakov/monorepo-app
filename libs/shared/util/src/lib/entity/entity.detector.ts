import { Dictionary } from '@ngrx/entity';

export function entitiesExist<E>(entities: Dictionary<E>): boolean {
  return !!Object.keys(entities).length;
}

export function entitiesDoNotExist<E>(entities: Dictionary<E>): boolean {
  return !entitiesExist(entities);
}

export function entityExists<E, T = E>(
  entities: Dictionary<E>,
  id: T[keyof T]
): boolean {
  if (typeof id === 'string' || typeof id === 'number') {
    return id in entities;
  }

  return false;
}

export function entityDoesNotExist<E, T = E>(
  entities: Dictionary<E>,
  id: T[keyof T]
): boolean {
  return !entityExists(entities, id);
}

export type EntityDetectorType =
  | 'allLoaded'
  | 'noneLoaded'
  | 'oneLoaded'
  | 'notLoaded';

export const entityDetectorMap = {
  allLoaded: entitiesExist,
  noneLoaded: entitiesDoNotExist,
  oneLoaded: entityExists,
  notLoaded: entityDoesNotExist
};
