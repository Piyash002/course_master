import mongoose, { Schema } from 'mongoose';
import type { TUser } from './user.type';
import { USER_Role } from './user.constant';
import bcrypt from 'bcrypt';
const UserSchema: Schema<TUser> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    number: { type: String },
    profile_image: { type: String },

    refreshToken: { type: String },
    role: {
      type: String,
      enum: Object.keys(USER_Role),
      default: USER_Role.USER,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre('save', async function (this: any) {
  if (!this.isModified('password')) {
    return;
  }
  const currentPassword = this.get('password') as unknown as string;
  const hashed = await bcrypt.hash(currentPassword, 10);
  this.set('password', hashed);
});
export const User =
  (mongoose.models.User as mongoose.Model<TUser>) ||
  mongoose.model<TUser>('User', UserSchema);
