"use client"
import Link from 'next/link';
import { useRouter } from "next/navigation"


export default function Projects() {
    const route = useRouter();

    const home = () => {
        return route.push("/");
    }

    return (
        <>
            {/* <button onClick={home}>go to home</button> */}
            <Link href={"/"}>back to home</Link>
            <h1>projects page</h1>
        </>
    )
}