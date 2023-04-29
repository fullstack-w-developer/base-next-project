import { headerMenu } from '@/utils/data'
import Image from 'next/image'
import React from 'react'
import Logo from "@/assets/images/logo_white.png"
import { RiLogoutCircleLine } from "react-icons/ri"
import { FiSearch } from "react-icons/fi"
const HeaderTop = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex w-[60%] items-center gap-11'>
                <div className='relative  w-[60px] h-[60px]'>
                    <Image fill alt='' src={Logo} className='object-contain' />
                </div>
                <div className='flex gap-6 font-y_medium text-[#ecf0f1] text-[13px]'>
                    {
                        headerMenu.map((menu, idx) => (
                            <a key={idx} href={menu.url}>
                                {menu.name}
                            </a>
                        ))
                    }
                </div>
            </div>
            <div className='flex  gap-2 text-white'>
                <FiSearch size={23} />
                <RiLogoutCircleLine size={23} />
            </div>
        </div>
    )
}

export default HeaderTop