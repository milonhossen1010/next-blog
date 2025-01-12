"use client"
import {FaFacebookF, FaInstagram, FaXTwitter, FaYoutube} from "react-icons/fa6";

import {CiSearch} from "react-icons/ci";
import Container from "@/app/components/Container";
import {RxHamburgerMenu} from "react-icons/rx";
import {BsBag} from "react-icons/bs";
import {PiUser} from "react-icons/pi";
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Link,
} from "@nextui-org/react";
import React, {useState} from "react";
import {usePathname} from 'next/navigation'

//Logo
export const Logo = () => {

    return (
        <>
            <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
                <path
                    clipRule="evenodd"
                    d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                    fill="currentColor"
                    fillRule="evenodd"
                />
            </svg>
        </>
    );
};

export default function Header() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    //Menu List
    const menuItems = [
        {
            id: 1,
            title: "Home",
            link: "/"
        },
        {
            id: 2,
            title: "About",
            link: "/about"
        },
        {
            id: 3,
            title: "Blog",
            link: "/blog"
        },
        {
            id: 4,
            title: "Contact",
            link: "/contact"
        },
    ];

    return (
        <>
            <div className="hidden sm:block header">
                <Container>
                    <div className="grid  grid-cols-3 py-7 items-center border-b">
                        <div className="flex gap-4">
                            <a href="#"><FaFacebookF/></a>
                            <a href="#"><FaXTwitter/></a>
                            <a href="#"><FaYoutube/></a>
                            <a href="#"><FaInstagram/></a>
                        </div>
                        <div className="text-center">

                            <Link href="/" color="foreground"
                                  className=" text-3xl md:text-5xl font-heading uppercase">
                                Next Blog</Link>
                        </div>
                        <div className="text-right flex items-center gap-4 justify-end text-2xl">
                            <Link color="foreground" href="#"><PiUser/></Link>
                            <Link color="foreground" className="text-xl" href="#"><BsBag/></Link>
                        </div>
                    </div>
                </Container>
            </div>

            <Navbar
                maxWidth="full"
                shouldHideOnScroll
                isBlurred={false}
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
            >


                <Container className="hidden sm:grid grid-cols-3 w-full">
                    <div className="text-2xl cursor-pointer">
                        <RxHamburgerMenu/>
                    </div>

                    <NavbarContent className="hidden sm:flex gap-4" justify="center">

                        {
                            menuItems.map((item, index) => (
                                <NavbarItem key={index}>
                                    <Link color="foreground" className="font-heading text-textColor" href={item.link}>
                                        {item.title}
                                    </Link>
                                </NavbarItem>
                            ))
                        }

                    </NavbarContent>

                    <div className="flex gap-4 justify-end text-3xl cursor-pointer">
                        <CiSearch/>
                    </div>

                </Container>

                {/* Mobile Menu*/}
                <NavbarContent className="sm:hidden pr-3" justify="start">
                    <NavbarBrand>
                        <Logo/>
                        <p className="font-bold text-inherit uppercase">Next Blog</p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="sm:hidden" justify="end">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}/>
                </NavbarContent>

                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full"
                                color="foreground"
                                href={item.link}
                                size="lg"
                            >
                                {item.title}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>

            </Navbar>
        </>
    )
}