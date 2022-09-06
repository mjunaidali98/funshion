import Product from "/components/common/product"
const Index = () => {
    return (
        <div className='bg-[#FAFAFA] py-[154px] w-full flex items-center'>
            <div className='container mx-auto px-4 md:pl-10 lg:pl-16'>
                <h1 className="text-[32px] font-bold leading-[38px] text-center">
                    Feature Products
                </h1>
                <p className="text-sm font-medium text-center mt-1 mb-14">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div className='grid grid-cols-4 grid-rows-2'>
                    <Product />
                    <Product />
                    <div className="col-span-2 row-span-2">
                        <Product />
                    </div>
                    <Product />
                    <Product />


                </div>
            </div>
        </div>
    )
}

export default Index