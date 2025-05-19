import {ReactNode} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {isAuthenticated} from "@/lib/actions/auth.actions";
import {redirect} from "next/navigation";

const RootLayout = async ({children} : {children: ReactNode}) => {
    const isUserAuthenticated = await isAuthenticated();

    if(!isUserAuthenticated) redirect('/sign-in')
    return (
        <div className="root-layout">
            <nav>
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="logo" height={32} width={38}/>
                    <h1 className="text-primary-100">EVA</h1>
                </Link>
            </nav>
            {children}
        </div>
    )
}
export default RootLayout
