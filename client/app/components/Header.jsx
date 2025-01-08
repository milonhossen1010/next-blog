import {FaFacebookF, FaInstagram, FaXTwitter, FaYoutube} from "react-icons/fa6";
import Link from "next/link";
import {CiSearch} from "react-icons/ci";
import Container from "@/app/components/Container";
import {RxHamburgerMenu} from "react-icons/rx";
import {BsBag} from "react-icons/bs";
import {PiUser} from "react-icons/pi";

export default function Header() {
    return (
        <header className="header">
            <Container>
                <div className="grid  grid-cols-3 py-7 items-center border-b">
                    <div className="flex gap-4">
                        <a href="#"><FaFacebookF/></a>
                        <a href="#"><FaXTwitter/></a>
                        <a href="#"><FaYoutube/></a>
                        <a href="#"><FaInstagram/></a>
                    </div>
                    <div className="text-center"><Link href="/" className="text-3xl md:text-5xl font-heading uppercase">Next
                        Blog</Link></div>
                    <div className="text-right flex items-center gap-4 justify-end text-2xl">
                        <Link href="#"><PiUser /></Link>
                        <Link className="text-xl" href="#"><BsBag/></Link>
                    </div>
                </div>
                <div className="grid grid-cols-3 py-7 items-center ">
                    <div className="text-2xl cursor-pointer"><RxHamburgerMenu/></div>
                    <div className="hidden md:flex gap-5 uppercase justify-center">
                        <Link className="font-heading " href="/">Home</Link>
                        <Link className="font-heading text-textColor" href="/">About</Link>
                        <Link className="font-heading text-textColor" href="/">Blog</Link>
                        <Link className="font-heading text-textColor" href="/">Contact</Link>
                    </div>
                    <div className="flex gap-4 justify-end text-3xl cursor-pointer">
                        <CiSearch/>
                    </div>


                </div>
            </Container>

        </header>
    )
}