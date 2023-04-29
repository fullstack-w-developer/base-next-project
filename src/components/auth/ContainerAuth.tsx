import React, { ReactNode } from 'react'
import Details from './Details'
interface Props {
    children: ReactNode
}
const ContainerAuth = ({ children }: Props) => {
    return (
        <div className='flex justify-between items-center h-screen w-[80%] mx-auto'>
            {children}
            <Details />
        </div>
    )
}

export default ContainerAuth