import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/actions";

export const UserMenu = () => {
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logout());
    }

    return (
        <div className="flex gap-2">
            <p>Hello, User!</p>
            <button 
                className="px-2 border rounded-lg bg-blue-500 hover:bg-blue-600 text-white" 
                onClick={handleLogOut}
            >Log Out</button>
        </div>
    )
}