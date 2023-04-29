import React from 'react'
interface Props {
    name: string;
    isLoading?: boolean;
    type?: "button" | "submit" | "reset" | undefined;
}
const Button = ({ name, isLoading, type }: Props) => {
    return (
        <button type={type} disabled={isLoading} className='bg-main mt-6 py-5 rounded-lg text-white'>
            {
                isLoading ? "در حال ارسال..." : name
            }
        </button>

    )
}

export default Button