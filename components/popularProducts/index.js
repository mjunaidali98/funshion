
import Product from "/components/common/product";
const Index = ({ products }) => {
    return (
        <div className="container mx-auto px-4 md:pl-10 lg:pl-16 py-[154px] ">
            <h1 className="text-[32px] font-bold leading-[38px] text-center">
                Popular Products
            </h1>
            <p className="text-sm font-medium text-center mt-1 mb-14">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {!products ? <>Loading</>
                    : products && products.length > 0 ? products.map((product) => {
                        return (
                            <div key={product.id} className="w-auto">
                                <Product {...product} key={product.id} height={"356px"}/>
                            </div>
                        )
                    })
                        : <p className="text-center"> No Record Found</p>
                }
            </div>
        </div>
    )
}

export default Index