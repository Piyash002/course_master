import { getRandomAvatar } from "@fractalsoftware/random-avatar-generator";
import { TUser } from "../user/user.type";
import { User } from "../user/user.model";

const  registerUser  = async(payload:TUser)=>{
const  { name, email, password, number, profile_image } = payload;
const avatar = getRandomAvatar();
const userPayload =  {
    name,
    email,
    password,
    number,
    profile_image: profile_image || avatar,
    refreshToken: '',
    role: 'USER',
}
const user  = new User(userPayload)
await user.save();

return user;
} 

export const  authService = {
    registerUser
};