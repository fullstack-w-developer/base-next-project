import React from 'react'
interface Props {
    Icon: any;
    title: string,
    subTitle: string
}
const CardInfo = ({ Icon, title, subTitle }: Props) => {
    return (
        <div className='flex items-center h-[55px] gap-2 mt-2'>
            <div className='bg-[#f1f2f6] text-[#0096f5] flex justify-center items-center rounded-lg h-full px-[12px]'>
                <Icon size={25} />
            </div>
            <div className='h-full flex justify-between flex-col'>
                <p className='font-[700] text-xs text-[#f7f7f7]'>{title}</p>
                <p className='text-xs font-y_medium text-[11px] text-[#cfcfcf]'>{subTitle}</p>
            </div>
        </div>
    )
}

export default CardInfo