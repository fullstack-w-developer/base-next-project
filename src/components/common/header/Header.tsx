import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'
const Header = () => {
    return (
        <header className='  bg-[url("./../assets/images/bg_header.svg")] bg-center bg-cover bg-no-repeat w-screen h-fit py-4'>
            <div className='w-[90%] mx-auto h-full flex flex-col justify-center gap-4 '>


                {/* header top */}
                <HeaderTop />
                {/* <div className='w-full h-[0.05rem] bg-[#cfcece34]' /> */}
                {/* header bottom */}
                {/* <HeaderBottom /> */}

            </div>
            {/* <Search /> */}
        </header>
    )
}

export default Header