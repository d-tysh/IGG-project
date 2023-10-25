import { Oval } from "react-loader-spinner"

export const Loader = ({loaderSize}: {loaderSize?: string}) => {
    return (
        <Oval
            height={loaderSize || 80}
            width={loaderSize || 80}
            color="#4fa94d"
            wrapperStyle={{padding: '0', display: 'flex', justifyContent: 'center'}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#c05463"
            strokeWidth={5}
            strokeWidthSecondary={5}
        />
    )
}