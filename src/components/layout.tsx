import { ReactNode } from "react";
import Nav from "./nav";
import Footer from "./footer";

interface ChildrenProps {
    children?: ReactNode
}    

export default function Layout({children}: ChildrenProps) {
    return (
        <>
            <Nav />
            <main>
                { children }
            </main>
            <Footer />
        </>
    )
}