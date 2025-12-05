import { USER_Role } from './user.constant';

export interface TUser extends Document {
  _id: 'string';
  name: 'string';
  email: 'string';
  number: 'string';
  password: 'string';
  profile_image: string;
  refreshToken: string;
  role: keyof typeof USER_Role;
  createdAt: 'string';
  updatedAt: 'string';
}
