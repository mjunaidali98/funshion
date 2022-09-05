import dynamic from "next/dynamic"

const Category = dynamic(() => import("./category"))
function Index() {
    return (
        <div className='bg-[#FAFAFA] py-[154px] w-full flex items-center'>
            <div className='container mx-auto px-4 md:pl-10 lg:pl-16'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Category image={"/assets/images/cat1.png"} text={`Up to 50% off sale`} highlightText={"50%"} />
                    <Category image={"/assets/images/cat2.png"} text={`Women's Collection`} highlightText={"Women's"} />
                    <Category image={"/assets/images/cat3.png"} text={`Men's Collection`} highlightText={"Men's"} />
                </div>
            </div>
        </div>
    )
}

export default Index