import React, { useState } from 'react'

const Index = () => {
    const [items] = useState([
        "Support",
        "Get Started",
        "Term of like",
        "Privacy Policy",
    ])
    return (
        <div className=' bg-black text-white w-full'>
            <div className='container mx-auto px-4 lg:px-0 w-full h-full lg:pl-20'>
                <div className='flex items-center pt-[92px] pb-[120px] h-full lg:w-11/12 w-full border-b-2 border-white'>
                    <div className='flex flex-wrap space-y-4 justify-between lg:w-11/12 w-full'>
                        <div className='w-[252px] my-4'>
                            <h2 className='font-extrabold text-[32px] leading-9'>
                                Funshion
                            </h2>
                            <p className='text-sm pt-[10px]'>
                                It is a long established fact that a reader will be distracted by the
                                readable content of a page when looking at its layout.
                            </p>
                        </div>

                        {[...new Array(3)].map((number) => {
                            return (
                                <div key={number} className='flex flex-col space-y-[10px] pr-4 '>
                                    <h3 className='font-extrabold text-[18px] leading-9 pb-0.5 whitespace-nowrap'>
                                        Need Help?
                                    </h3>
                                    {items.map((item) => {
                                        return (
                                            <a  key={item}>
                                                <span className='text-xs font-medium cursor-pointer'>
                                                    {item}
                                                </span>
                                            </a>
                                        )
                                    })}
                                </div>
                            )
                        })}

                    </div>
                </div>
                <p className='text-sm font-medium py-[30px]'>Copyright @ Funshion. All Right Reserved.</p>
            </div>
        </div>
    )
}
export default Index