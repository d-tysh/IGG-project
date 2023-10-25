import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { ReactElement } from 'react'

export const PrivateRoute = ({component: Component, redirectTo = '/'}: {component: ReactElement, redirectTo: string}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const shouldRedirect = !isLoggedIn;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}