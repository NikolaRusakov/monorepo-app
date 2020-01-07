import { UserInfo } from 'firebase';

export interface User extends UserInfo {
  docId: string;
  createdAt: string;
  updatedAt: string;
}
