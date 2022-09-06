import dynamic from "next/dynamic";
import { useStore } from "../../context";
import { useCountdown } from "../common/counter";
const ShowCounter = dynamic(() => import("../common/counter/showCounter"))
const Categories = dynamic(() => import("/components/categories"))
const PopularProducts = dynamic(()=> import ("/components/popularProducts"))
const FeatureProducts = dynamic(()=> import ("/components/featureProducts"))

const Index = ({products}) => {
    const { timeLeft } = useStore();

    const [days, hours, minutes, seconds] = useCountdown(timeLeft);
    return (
        <>
            <div className="container mx-auto px-4 md:pl-10 lg:pl-16">
                <div className="flex flex-col lg:flex-row  justify items-center my-[120px] ">
                    <div className="max-w-[432px] w-full">
                        <h1 className="text-[38px] md:text-[42px] lg:text-[46px] text-black font-bold leading-[55px]">
                            Top Designers Pick
                        </h1>
                        <p className="text-sm pt-4">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            The point of using Lorem Ipsum is that it has a more-or-less
                        </p>

                        <button className="bg-[#F09522] text-white px-[30px] py-[14px] mt-[39px] mb-[56px] ">
                            Shop now
                        </button>

                        <div className="flex flex-col space-y-2 items-start bg-black text-white w-full md:w-[410px] my-4 py-4 px-4 md:px-[40px]">
                            <p className="text-lg font-bold ">
                                50% Discount Till
                            </p>
                            {
                                days + hours + minutes + seconds <= 0 ?
                                    <ShowCounter
                                        days={0}
                                        hours={0}
                                        minutes={0}
                                        seconds={0}
                                    />
                                    :
                                    <ShowCounter
                                        days={days}
                                        hours={hours}
                                        minutes={minutes}
                                        seconds={seconds}
                                    />

                            }
                        </div>
                    </div>
                    <div className="w-full relative hidden lg:flex items-center lg:justify-end ">
                        <img alt="" className="z-10 md:-mr-20 xl:-mr-10" src="/assets/images/image2.png" />
                        <img alt="" className="z-0" src="/assets/images/image1.png" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-20">
                    {[...new Array(4)].map((item) => {
                        return (
                            <div key={item} className="flex items-center justify-center space-x-2.5">
                                <img className="w-10 h-10" src="/assets/images/fast-delivery.png" />
                                <div>
                                    <p className="text-sm font-bold"> FAST DELIVERY</p>
                                    <p className="text-xs font-normal">
                                        Lorem Ipsum is simply dummy text
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Categories />
            <PopularProducts products={products}/>
            <FeatureProducts />
        </>
    )
}
export default Index
