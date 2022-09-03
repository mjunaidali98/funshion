import { Facebook, Instagram, Pinterest } from "../common/svgs";


const Index = () => {
    return (
        <div className='bg-black h-[75px] flex items-center '>
            <div className="container mx-auto lg:px-0 px-4 flex items-center justify-between">
                <p className="font-bold leading-5 text-white ">Free shipping on all UK orders!</p>
                <div className="flex items-center justify-between space-x-4">
                    <Facebook url={"https://www.facebook.com"} />
                    <Instagram url={"https://www.facebook.com"} />
                    <Pinterest url={"https://www.facebook.com"} />
                </div>

            </div>
        </div>
    )
}

export default Index