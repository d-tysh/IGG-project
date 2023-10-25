import { useSelector } from "react-redux";
import { selectTableLoading } from "../../redux/table/selectors";
import { useForm } from "react-hook-form";
import { Loader } from "../Loader/Loader";
import { addData } from "../../redux/table/actions";
import { FormData } from "../../interfaces/interfaces";
import { useAppDispatch } from "../../hooks";

export const TableDataForm = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormData>();
    const isLoading = useSelector(selectTableLoading);
    const dispatch = useAppDispatch();

    const onSubmit = (data: FormData) => {
        dispatch(addData(data));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1 w-[300px] mx-auto mb-4">
            <input
                {...register('name', 
                    {
                        required: 'Name is required!', 
                        minLength: {value: 1, message: 'Minimum username length is 1!'},
                        maxLength: {value: 255, message: 'Maximum username length is 255!'}
                    }
                )} 
                type="text" placeholder="Enter name" className="px-4 border py-2 rounded-xl hover:border-gray-400" />
            <p className="text-xs text-red-600 mb-1">{errors.name?.message}</p>
            <input
                {...register('email', 
                    {
                        required: 'Email is required!', 
                        minLength: {value: 1, message: 'Minimal email length is 1!'},
                        maxLength: {value: 254, message: 'Maximum email length is 254!'}
                    }
                )} 
                type="text" placeholder="Enter email" className="px-4 border py-2 rounded-xl hover:border-gray-400" />
            <p className="text-xs text-red-600 mb-1">{errors.email?.message}</p>
            <input
                {...register('phone_number', 
                {
                    required: 'Phone number is required!',
                    minLength: {value: 1, message: 'Minimal email length is 1!'},
                    maxLength: {value: 20, message: 'Maximum email length is 20!'}
                }
                )} 
                type="text" placeholder="Enter phone number" className="px-4 border py-2 rounded-xl hover:border-gray-400" />
            <p className="text-xs text-red-600 mb-1">{errors['phone_number']?.message}</p>
            <input
                {...register('birthday_date', 
                    {
                        required: 'Birthday date is required!',
                        pattern: {
                            value: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
                            message: "Invalid birthday date address. Must be YYYY-MM-DD"
                        }
                    }
                )} 
                type="text" placeholder="Enter birthday date" className="px-4 border py-2 rounded-xl hover:border-gray-400" />
            <p className="text-xs text-red-600 mb-1">{errors['birthday_date']?.message}</p>
            <input
                {...register('address', 
                    {
                        required: 'Address is required!',
                        minLength: {value: 1, message: 'Minimal email length is 1!'}
                    }
                )} 
                type="text" placeholder="Enter address" className="px-4 border py-2 rounded-xl hover:border-gray-400" />
            <p className="text-xs text-red-600 mb-1">{errors.address?.message}</p>
            {isLoading ? <Loader loaderSize='30px' /> : 
                <button 
                    className="py-2 text-white font-bold rounded-xl bg-blue-500 hover:bg-blue-600 hover:text-white"
                >Send data</button>}
        </form>
    )
}