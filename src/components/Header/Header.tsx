import { NavLink } from "react-router-dom";
import { UserMenu } from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export const Header = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <div className="mb-4 border-b flex justify-between">
            <nav>
                <NavLink to='/' className='border px-4 py-1 rounded-t-md hover:bg-blue-600 hover:text-white'>Home</NavLink>
                {isLoggedIn ? <NavLink to='/table' className='border px-4 py-1 rounded-t-md hover:bg-blue-600 hover:text-white'>Table</NavLink> : null}
                {isLoggedIn ? <NavLink to='/add-table-data' className='border px-4 py-1 rounded-t-md hover:bg-blue-600 hover:text-white'>Add data</NavLink> : null}
            </nav>
            {isLoggedIn ? <UserMenu /> : <NavLink to='/login' className='border px-4 rounded-t-md text-white bg-blue-500 hover:bg-blue-600'>Log In</NavLink>}
        </div>
    )
}