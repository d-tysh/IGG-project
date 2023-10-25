import { useDispatch, useSelector } from "react-redux";
import { selectTableLoading } from "../../redux/table/selectors";
import { useForm } from "react-hook-form";
import { Loader } from "../Loader/Loader";
import { addData } from "../../redux/table/actions";
import { DataProps, FormData } from "../../interfaces/interfaces";

export const TableDataForm = ({item}: {item?: DataProps}) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormData>();
    const isLoading = useSelector(selectTableLoading);
    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch(addData(item));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1 w-[300px] mx-auto mb-4">
            <input value={item?.name}
                {...register('name', 
                    {
                        required: 'Name is required!', 
                        minLength: {value: 1, message: 'Minimum username length is 1!'},
                        maxLength: {value: 255, message: 'Maximum username length is 255!'}
                    }
                )} 
                type="text" placeholder="Enter name" className="px-4 border py-2 rounded-xl hover:border-gray-400" />
            <p className="text-xs text-red-600 mb-1">{errors.name?.message}</p>
            <input value={item?.email}
                {...register('email', 
                    {
                        required: 'Email is required!', 
                        minLength: {value: 1, message: 'Minimal email length is 1!'},
                        maxLength: {value: 254, message: 'Maximum email length is 254!'}
                    }
                )} 
                type="text" placeholder="Enter email" className="px-4 border py-2 rounded-xl hover:border-gray-400" />
            <p className="text-xs text-red-600 mb-1">{errors.email?.message}</p>
            <input value={item?.phone_number}
                {...register('phone_number', 
                {
                    required: 'Phone number is required!',
                    minLength: {value: 1, message: 'Minimal email length is 1!'},
                    maxLength: {value: 20, message: 'Maximum email length is 20!'}
                }
                )} 
                type="text" placeholder="Enter phone number" className="px-4 border py-2 rounded-xl hover:border-gray-400" />
            <p className="text-xs text-red-600 mb-1">{errors['phone_number']?.message}</p>
            <input value={item?.birthday_date}
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
            <input value={item?.address}
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