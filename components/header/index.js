import Link from "next/link"
import Router from "next/router";
import { useState } from "react"
import { useStore } from "../../context";
import { Cart, Search, UserProfile } from "../common/svgs"

const Index = () => {
    const { dispatch } = useStore()
    const [menu, setMenu] = useState(false);
    const [headerItems] = useState([
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About",
            link: "/"
        },
        {
            name: "Shop",
            link: "/"
        },
        {
            name: "Pages",
            link: "/"
        },
        {
            name: "Blog",
            link: "/"
        }

    ])

    return (
        <div className="flex items-center h-[75px] w-full shadow-header bg-white relative z-50">
            <div className="container mx-auto px-4 md:pl-10 lg:pl-16 ">
                <div className="flex justify-between items-center">
                    <p className="text-[32px] font-extrabold leading-5">Funshion</p>
                    <div className="hidden md:flex items-center space-x-20">
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
                    <div role={"button"} onClick={() => setMenu(!menu)} className="block md:hidden">
                        {menu ?
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="4" y1="6" x2="20" y2="6" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="18" x2="20" y2="18" />
                            </svg>
                        }
                    </div>
                </div>
            </div>
            <div className={` md:hidden absolute inset-0 w-full h-full transition-all ease-in-out duration-500 z-10 ${menu ? "top-[75px] opacity-100" : "-top-[1000px] opacity-0"}`}>
                <div className="bg-white drop-shadow-lg h-[400px] border-t border-[#EFEFEF]">
                    <div className="flex flex-col justify-evenly h-full">
                        <div className="flex flex-col items-center">
                            {headerItems.map((item) => {
                                return (
                                    <Link key={item.name} href={item.link}>
                                        <a className="text-lg font-medium leading-5 p-4">
                                            {item.name}
                                        </a>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="flex justify-center items-center space-x-8">
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