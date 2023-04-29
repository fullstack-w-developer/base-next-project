import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/common/header/Header";
import { menus } from "@/utils/data";
import Link from "next/link";
import { useRouter } from "next/router";
import Menu from "@/components/common/Menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="w-full">
            <div className="bg-[#f7f7f7] w-screen">
                <Header />

                {/* <Menu /> */}
            </div>
        </div>
    );
}
