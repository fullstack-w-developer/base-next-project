import { menus } from '@/utils/data'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Menu = () => {
    const router = useRouter()
    return (
        <div className=" pt-5 flex justify-center items-center gap-10">
            {
                menus.map((menu, idx) => (
                    <Link className={`flex items-center border-b-2 pb-3  gap-2 ${router.pathname === menu.url ? "text-orange-500 border-orange-500" : "text-gray-500 border-transparent"}`} href={menu.url} key={idx}>
                        <menu.icon size={23} />
                        <p className="text-xs mt-2 font-[700]">{menu.name}</p>
                    </Link>
                ))
            }
        </div>
    )
}

export default Menu