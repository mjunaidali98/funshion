
const Index = () => {
    return (
        <div className='container mx-auto px-4 md:pl-10 lg:pl-16 py-[154px] '>
            <div className="flex items-center w-full h-full ">
                <div className="bg-[#F09522] bg-opacity-25 md:h-[284px] flex flex-col md:flex-row w-full">
                    <div className="w-full md:w-[60%] flex items-center justify-center py-16 ">
                        <div className="flex flex-col space-y-4">
                            <p className="text-2xl sm:text-3xl text-center md:text-4xl font-bold md:max-w-[345px] mx-4">
                                SIGN UP FOR NEWS
                                &amp; GET 20% OFF
                            </p>
                            <form className="md:flex items-center h-[46px] mx-4">
                                <input type={"email"} placeholder={"Your email address"} required className="w-full md:w-[254px] px-4 h-full outline-none appearance-none focus:outline-none" />
                                <button className="bg-[#F09522] text-white px-[30px] w-full h-full capitalize ">
                                    Add to cart
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="w-full md:w-[40%] h-full">
                        <img className="w-full h-full" src="/assets/images/s1.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index