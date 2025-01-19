"use client"
import {Input, Link} from "@nextui-org/react";
import Container from "@/app/components/Container";
import {IoIosSend} from "react-icons/io";
import {FaFacebookF, FaInstagram, FaXTwitter, FaYoutube} from "react-icons/fa6";
import React from "react";
const catList= [
    {
        id: 1,
        title: "Style",
        link:"/style"
    },
    {
        id: 2,
        title: "Season",
        link:"/season"
    },
    {
        id: 3,
        title: "Lifestyle",
        link:"/lifestyle"
    },
    {
        id: 4,
        title: "Fashion",
        link:"/fashion"
    }
]

const navLinks= [
    {
        id: 1,
        title: "About",
        link:"/about"
    },
    {
        id: 2,
        title: "News",
        link:"/news"
    },
    {
        id: 3,
        title: "Contacts",
        link:"/contacts"
    },
    {
        id: 4,
        title: "Privacy",
        link:"/privacy"
    }
]

export default function Footer() {
    return (
        <div className="pt-10 pb-5 md:pt-20 bg-black">
           <Container>
               <div className="grid md:grid-cols-5 gap-4 items-start">
                   <Link href="/"
                         className="text-white text-3xl md:text-4xl   font-heading uppercase">
                       Next Blog</Link>
                   <div className="md:ml-14">
                       <h2 className="text-white mb-5 uppercase">Categories</h2>
                       <ul>
                           {
                               catList.map((item, index) => (
                                   <li key={index}><Link className="text-textColor mb-4"  href={item.link}>{item.title}</Link></li>
                               ))
                           }

                       </ul>
                   </div>

                   <div>
                       <h2 className="text-white mb-5 uppercase">Links</h2>
                       <ul>
                           {
                               navLinks.map((item, index) => (
                                   <li key={index}><Link className="text-textColor mb-4"  href={item.link}>{item.title}</Link></li>
                               ))
                           }

                       </ul>
                   </div>

                   <div className="md:col-span-2">
                       <h2 className="text-white mb-5 uppercase">Newsletter</h2>
                       <div className="text-white relative" >
                           <Input color="primary" label="Enter Your Email" type="email" variant="underlined" />
                           <button className="absolute right-0 bottom-2 uppercase text-xs font-heading flex gap-2 items-center"><IoIosSend className="text-xl" />Subscribe</button>
                       </div>
                   </div>

               </div>
               <div className="pt-5 mt-14 border-t border-[#2d3036] grid md:grid-cols-2 gap-3 justify-between items-center">
                   <p className="text-textColor">NextBlog  © 2025. All Rights Reserved.</p>
                   <div className="flex gap-5 justify-end">
                       <Link className="text-white text-xs font-heading inline-flex gap-1" href="#"><FaFacebookF/> Facebook</Link>
                       <Link className="text-white text-xs font-heading inline-flex gap-1" href="#"><FaXTwitter/> X</Link>
                       <Link className="text-white text-xs font-heading inline-flex gap-1" href="#"><FaYoutube/> Youtube</Link>
                       <Link className="text-white text-xs font-heading inline-flex gap-1" href="#"><FaInstagram/> Instagram</Link>
                   </div>
               </div>
           </Container>

        </div>
    )
}