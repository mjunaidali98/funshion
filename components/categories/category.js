function Category({ image, text, highlightText, checkout = true, height = '100%' }) {
    return (
        <div className={`h-[${height}] relative cursor-pointer`}>
            <div className='absolute inset-0 background_mask' />
            <img className="w-full h-full" src={image ? image : "/assets/images/p1.png"} />
            <div className=' my-3 sm:my-6 md:my-10  mx-2 sm:mx-4 md:mx-8 border-8 absolute inset-0 '>
                <div className='w-full h-full flex items-end p-4 md:p-8'>
                    <div className='flex flex-col space-y-[6px]'>
                        <div id='title' className='text-4xl font-normal text-white leading-[43.5px]'>
                            <p dangerouslySetInnerHTML={{
                                __html: (text && text.length > 0
                                    ? text.replace(new RegExp(highlightText, 'gi'), (match) => {
                                        return match && `<span class='font-bold bg-[#F09522] p-1'>${match}</span>`
                                    })
                                    : text)
                            }}></p>
                        </div>
                        {checkout ? <div className='flex items-center w-full space-x-[10px]'>
                            <p className='text-white text-[13px] font-medium'>Check Now</p>
                            <div className='w-[54px] h-1 bg-white' ></div>
                        </div> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category