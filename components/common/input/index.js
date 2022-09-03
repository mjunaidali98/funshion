import React from 'react'

function Index({ label, style, message, required = false, type , inputRequired=false }) {
    return (
        <div className={`${style}`}>

            {label && <p className=' leading-14.52px text-xs font-medium mb-2.5'>
                {label}
                {required === true && <sup className='text-brand'>*</sup>}
            </p>}

            <input required={inputRequired} type={type ? type : "text"} className={`bg-[#EEEEEE] w-full p-4 text-sm h-9 focus-within:outline-brand `} />
            {
                message && <p className='mt-2 text-[10px] leading-3 font-medium text-[#B5B2B2]'>
                    {message}
                </p>
            }
        </div>
    )
}

export default Index