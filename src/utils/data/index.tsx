import { HiOutlineHome, HiOutlineUsers } from "react-icons/hi"
import { BiUser } from "react-icons/bi"
import { BsFillBookmarkCheckFill } from "react-icons/bs"

export const headerMenu = [
    {
        name: "معرفی دانشگاه",
        url: "https://sku.ac.ir/Page/65/%D9%85%D8%B9%D8%B1%D9%81%DB%8C-%D8%AF%D8%A7%D9%86%D8%B4%DA%AF%D8%A7%D9%87%20%D8%B4%D9%87%D8%B1%DA%A9%D8%B1%D8%AF"
    },
    {
        name: "افتخارات دانشگاه",
        url: "https://sku.ac.ir/Page/79/%D8%A7%D9%81%D8%AA%D8%AE%D8%A7%D8%B1%D8%A7%D8%AA-%D8%AF%D8%A7%D9%86%D8%B4%DA%AF%D8%A7%D9%87"
    },
    {
        name: "ریاست دانشگاه",
        url: "https://sku.ac.ir/Vice-President/Admin"
    },
    {
        name: "دانشجویان",
        url: "https://sku.ac.ir/University-Students"
    },
    {
        name: "کارمندان دانشگاه",
        url: "https://sku.ac.ir/Shahrekord-University-Employees"
    },
    {
        name: "درباره شهر کرد",
        url: "https://sku.ac.ir/Page/75/%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87-%D8%B4%D9%87%D8%B1%DA%A9%D8%B1%D8%AF"
    },
    {
        name: "نقشه شهر کرد",
        url: "https://sku.ac.ir/Page/72/%D9%86%D9%82%D8%B4%D9%87-%D8%AF%D8%A7%D9%86%D8%B4%DA%AF%D8%A7%D9%87%20%D8%B4%D9%87%D8%B1%DA%A9%D8%B1%D8%AF"
    },
]


export const menus = [
    {
        name:"خانه",
        icon:HiOutlineHome,
        url:"/"
    },
    {
        name:"پروفایل",
        icon:BiUser,
        url:"/profile"
    },
    {
        name:"ذخیره شده‌ها",
        icon:BsFillBookmarkCheckFill,
        url:"saves"
    },
    {
        name:"دریافتی‌ها",
        icon:HiOutlineUsers,
        url:"recive"
    },
]