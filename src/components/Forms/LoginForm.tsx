import { login } from "../../redux/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/auth/selectors";
import { Loader } from "../Loader/Loader";
import { useForm } from "react-hook-form";

type FormData = {
    username: string
    password: string
}

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    const onSubmit = (userData: FormData) => {
        dispatch(login(userData));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1 w-[300px] mx-auto">
            <input
                {...register('username',
                    {
                        required: 'Username is required!',
                        minLength: { value: 3, message: 'Minimal username length is 3!' }
                    }
                )}
                type="text" placeholder="Enter login" className="px-4 border py-2 rounded-xl hover:border-gray-400" />
            <p className="text-xs text-red-600 mb-1">{errors.username?.message}</p>
            <input
                {...register('password',
                    {
                        required: 'Password is required!',
                        minLength: { value: 3, message: 'Minimal password length is 3!' }
                    }
                )}
                type="password" placeholder="Enter password" className="px-4 border py-2 rounded-xl hover:border-gray-400" />
            <p className="text-xs text-red-600 mb-1">{errors.password?.message}</p>
            {
                isLoading ? <Loader loaderSize='30px' /> :
                <button 
                    className="py-2 text-white font-bold rounded-xl bg-blue-500 hover:bg-blue-600 hover:text-white"
                >Login</button>
            }
        </form>
    )
}