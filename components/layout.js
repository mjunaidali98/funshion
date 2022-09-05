import dynamic from "next/dynamic"

const FreeShiping = dynamic(() => import("./freeShiping"))
const Header = dynamic(() => import("./header"))
const Footer = dynamic(() => import("./footer"))
export default function Layout({ children }) {
    return (
        <>
            <FreeShiping />
            <Header />
            {children}
            <Footer />

        </>
    )
}