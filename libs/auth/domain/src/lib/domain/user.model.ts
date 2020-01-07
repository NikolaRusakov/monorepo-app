import { UserInfo, firestore } from 'firebase';

export interface User extends UserInfo {
  docId: string;
  createdAt: firestore.Timestamp;
  updatedAt: firestore.Timestamp;
}
