import React from 'react';

import {Route, Routes,} from 'react-router-dom';
import {
	ADMIN_ROUTE,
	BASKET_ROUTE,
	DEVICE_ROUTE,
	LOGIN_ROUTE,
	REGISTRATION_ROUTE,
	SHOP_ROUTE
} from "../utils/consts";
import ProtectedRouteElement from "./ProtectedRoute";
import Basket from "../page/Basket";
import Admin from "../page/Admin";
import Shop from "../page/Shop";
import Auth from "../page/Auth";
import DevicePage from "../page/DevicePage";

const AppRouter = () => {
	const isLoggedIn = false
	return (
		<Routes>
			<Route path={BASKET_ROUTE}
			       element={<ProtectedRouteElement
				       element={Basket}
				       isLoggedIn={isLoggedIn}
			       />}
			/>
			<Route path={ADMIN_ROUTE}
			       element={<ProtectedRouteElement
				       element={Admin}
				       isLoggedIn={isLoggedIn}
			       />}
			/>
			<Route path={SHOP_ROUTE} element={<Shop/>}/>
			<Route path={LOGIN_ROUTE} element={<Auth/>}/>
			<Route path={REGISTRATION_ROUTE} element={<Auth/>}/>
			<Route path={DEVICE_ROUTE + '/:id'} element={<DevicePage/>}/>
		</Routes>
	);
};

export default AppRouter;
