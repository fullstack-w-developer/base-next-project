import Image from 'next/image'
import React from 'react'
import Pegah from "@/assets/images/pegah.jpg"
import CardInfo from './CardInfo'
import { HiOutlineShieldExclamation } from "react-icons/hi"
const HeaderBottom = () => {
    return (
        <div className=' flex justify-between items-center w-[56.5%]'>
            <div className='flex items-center gap-3'>
                <Image className='rounded-full overflow-hidden border shadow-sm' src={Pegah} alt="" width={50} height={50} />
                <div className='space-y-2 text-white'>
                    <div className='flex items-center gap-3 font-y_light text-[11px]'>
                        <p className='font-[600] text-xs'>پگاه نوروزی</p>
                        <button className='border px-3 py-1 text-[#dad8d8] border-[#cfcece79] rounded-lg'>ویرایش</button>
                    </div>
                    <p className='font-y_light text-[11px] text-[#cfcfcf]'>دانشجو</p>
                </div>

            </div>

            <div className='flex items-center gap-4'>
                <CardInfo subTitle='12' title='تعداد پروژه' Icon={HiOutlineShieldExclamation} />
                <CardInfo subTitle='12' title='تعداد لایک ها' Icon={HiOutlineShieldExclamation} />
                <CardInfo subTitle='12' title='تعداد فیلد' Icon={HiOutlineShieldExclamation} />
           
            </div>

        </div>
    )
}

export default HeaderBottom