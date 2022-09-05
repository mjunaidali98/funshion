import React, { useEffect } from 'react'

function Category({ image, text, highlightText }) {
    return (
        <div className='max-w-[343px] relative cursor-pointer'>
            <div className='absolute inset-0 background_mask' />
            <img src={image} />

            <div className='my-10 mx-8 border-8 absolute inset-0 '>
                <div className='w-full h-full flex items-end p-8'>
                    <div className='flex flex-col space-y-[6px]'>
                        <p id='title' className='text-4xl font-normal text-white leading-[43.5px]'>
                            {/* Up to <span className='font-bold bg-[#F09522] p-1'>50%</span> off sale */}
                            {/* <span>
                                {words.map(item => {
                                    if (text.includes(item)) {
                                        return <span className="font-bold bg-[#F09522] p-1">{item}</span>
                                    }
                                })}
                            </span> */}
                            <div dangerouslySetInnerHTML={{
                                __html: (text.length > 0
                                    ? text.replace(new RegExp(highlightText, 'gi'), (match) => {
                                        return `<span class='font-bold bg-[#F09522] p-1'>${match}</span>`
                                    })
                                    : text)
                            }}></div>
                        </p>
                        <div className='flex items-center w-full space-x-[10px]'>
                            <p className='text-white text-[13px] font-medium'>Check Now</p>  <div className='w-[54px] h-1 bg-white' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category