import { Dictionary } from '@ngrx/entity';
import { User } from '@fapp/auth/domain';
import { entityDetectorMap, EntityDetectorType } from '@fapp/shared/util';

export const userDetector = (type: EntityDetectorType) => (
  entities: Dictionary<User>,
  uid?: string
): boolean => entityDetectorMap[type](entities, uid);
