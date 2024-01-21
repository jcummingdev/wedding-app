import { ReactNode } from "react";
import Nav from "./nav";

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
        </>
    )
}