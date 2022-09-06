import Category from "../categories/category"
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
                <div className="">
                    <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full h-full'>
                        <Product height={"274px"} />
                        <Product height={"274px"} />
                        <div className="lg:col-span-2 lg:row-span-2">
                            <Product height={"568px"} />
                        </div>
                        <Product height={"274px"} />
                        <Category text={"30% OFF!"} checkout={false} height={"274px"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index