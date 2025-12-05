import { Router } from 'express';
import { authRoute } from '../modules/auth/aurh.route';
export const router = Router();

 const route = [{
    path:'/auth',
    route: authRoute
}]

route.forEach((route)=>{
    router.use(route.path, route.route);
})

