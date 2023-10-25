import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { ReactElement } from 'react';

export const RestrictedRoute = ({component: Component, redirectTo = '/'}: {component: ReactElement, redirectTo: string}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    
    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}