import {
	ADMIN_ROUTE,
	BASKET_ROUTE,
	DEVICE_ROUTE,
	LOGIN_ROUTE,
	REGISTRATION_ROUTE,
	SHOP_ROUTE
} from "./utils/consts";
import DevicePage from "./page/DevicePage";
import Auth from "./page/Auth";
import Shop from "./page/Shop";
import Basket from "./page/Basket";
import Admin from "./page/Admin";

export const authRoutes = [
	
	{
		path: ADMIN_ROUTE,
		component: Admin
	},
	{
		path: BASKET_ROUTE,
		component: Basket
	}

];

export const publicRoutes = [
	{
		path: SHOP_ROUTE,
		component: Shop
	},
	{
		path: LOGIN_ROUTE,
		component: Auth
	},
	{
		path: REGISTRATION_ROUTE,
		component: Auth
	},
	{
		path: DEVICE_ROUTE + '/:id',
		component: DevicePage
	},
];
