import Link from "next/link"
import { useState } from "react"
import { Cart, Search, UserProfile } from "../common/svgs"

const Index = () => {
    const [headerItems] = useState([
        {
            name: "Home",
            link: "/home"
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Shop",
            link: "/shop"
        },
        {
            name: "Pages",
            link: "/pages"
        },
        {
            name: "Blog",
            link: "/Blog"
        }

    ])
    return (
        <div className="flex items-center h-[75px] w-full shadow-header bg-white">
            <div className="container mx-auto px-4 md:pl-10 lg:pl-16 ">
                <div className="flex justify-between items-center">
                    <p className="text-[32px] font-extrabold leading-5">Funshion</p>
                    <div className="flex items-center space-x-20">
                        <div className="flex space-x-6 ">
                            {headerItems.map((item) => {
                                return (
                                    <Link key={item.name} href={item.link}>
                                        <a className="text-sm font-medium leading-5 ">
                                            {item.name}
                                        </a>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="flex items-center space-x-8">
                            <Search />
                            <UserProfile />
                            <Cart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index