import React from 'react'

const Index = ({ title, image, price, rating, category, id, height }) => {
    return (

        <div key={id} className="flex flex-col justify-between w-full h-full group cursor-pointer">
            <div className='h-full w-full'>
                <div className='relative'>
                    <div className={`h-[${height}] w-full`}>
                        <img className="group w-full h-full" src={image ? image : "/assets/images/p1.png"} />
                    </div>
                    <div className='group-hover:opacity-100 opacity-0 absolute inset-0 background_mask transition-all ease-in-out duration-300' />
                    <div className=' group-hover:opacity-100 opacity-0 absolute right-4 top-5 transition-all ease-in-out duration-300'>
                        <div className='flex flex-col space-y-2 '>
                            <div className='bg-[#F09522] w-8 h-8 rounded-full flex items-center justify-center'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 4.37439C3.75 4.37439 1.25 10 1.25 10C1.25 10 3.75 15.6244 10 15.6244C16.25 15.6244 18.75 10 18.75 10C18.75 10 16.25 4.37439 10 4.37439Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27416 11.7259 6.87505 10 6.87505C8.27411 6.87505 6.875 8.27416 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className='bg-[#F09522] w-8 h-8 rounded-full flex items-center justify-center'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 16.875C10 16.875 2.1875 12.5 2.1875 7.1875C2.18766 6.24854 2.51301 5.33862 3.10824 4.61243C3.70347 3.88625 4.53183 3.38863 5.45249 3.20417C6.37315 3.01972 7.32928 3.15982 8.15832 3.60065C8.98736 4.04148 9.63814 4.75584 10 5.62226L9.99999 5.62227C10.3619 4.75584 11.0126 4.04149 11.8417 3.60065C12.6707 3.15982 13.6268 3.01972 14.5475 3.20417C15.4682 3.38863 16.2965 3.88625 16.8918 4.61243C17.487 5.33862 17.8123 6.24854 17.8125 7.1875C17.8125 12.5 10 16.875 10 16.875Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-300 absolute inset-0 w-full h-full z-10'>
                        <div className='flex items-center justify-center w-full h-full'>
                            <button className="bg-[#F09522] text-white px-[30px] py-[14px] mt-[39px] mb-[56px] capitalize ">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
                {category || rating ?
                    <div className="flex items-center justify-between mt-4">
                        {category ? <p className="text-sm font-medium capitalize">{category}</p> : null}
                        {rating && rating.rate ?
                            <div className="flex items-center space-x-0.5">
                                {[... new Array(5)].map((item, idx) => {
                                    return (
                                        <svg key={idx} width="16" height="15" viewBox="0 0 16 15" fill={Math.round(rating.rate) >= idx + 1 ? "#F09522" : "none"} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 1.61803L9.32058 5.68237L9.43284 6.02786H9.79611H14.0696L10.6123 8.53976L10.3184 8.75329L10.4306 9.09878L11.7512 13.1631L8.29389 10.6512L8 10.4377L7.70611 10.6512L4.24877 13.1631L5.56936 9.09878L5.68162 8.75329L5.38772 8.53976L1.93039 6.02786H6.20389H6.56716L6.67942 5.68237L8 1.61803Z"
                                                stroke={Math.round(rating.rate) >= idx + 1 ? "#F09522" : "#EFEFEF"} />
                                        </svg>

                                    )
                                })}
                            </div> : null
                        }
                    </div> : null}
                {title ? <p className="text-lg mt-2 mb-4 font-semibold">{title}</p> : null}
            </div>
            {price ?
                <div className="flex items-center justify-between">
                    <p className="text-[#F09522] font-semibold text-[22px]">${price}</p>
                    <div className="flex items-center space-x-1">
                        {
                            [...["#3B2BFF", "#E20404", "#07BA39"]].map((color, idx) => {
                                return (
                                    <div key={idx} style={{ background: color }} className={` w-5 h-5 rounded-full`}></div>
                                )
                            })
                        }
                    </div>
                </div> : null
            }

        </div>
    )
}

export default Index