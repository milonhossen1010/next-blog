"use client"
import Container from "@/app/components/Container";
import FadeIn from "@/app/components/FadeIn";
import Image from "next/image";
import {Link} from "@nextui-org/react";
import {BiSolidEdit} from "react-icons/bi";
import {CiCalendarDate} from "react-icons/ci";
import {map} from "framer-motion/m";

const postList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function LatestPosts() {
    return (
        <div className="py-10 md:py-20 ">
            <Container>
                <FadeIn className="mb-8">
                    <div className="text-center flex items-end  text-black">
                        <span className='hidden border h-[4px] border-[#EAEAEA] md:block w-full'></span>
                        <h2 className="text-4xl w-full">Latest Posts</h2>
                        <span className='hidden border h-[4px] border-[#EAEAEA] md:block w-full'></span>
                    </div>
                    <p className="text-textColor text-center">Stay up-to-date</p>
                </FadeIn>
                <div className="grid md:grid-cols-3 gap-6">


                    {
                        postList.map((post, index) => (
                            <FadeIn key={index}>
                                <Link className="block" href="#">
                                    <Image
                                        src="https://chronicle.ancorathemes.com/wp-content/uploads/2020/03/image-95-642x428.jpg"
                                        alt="Post"
                                        width={400}
                                        height={350}
                                        className="w-full"
                                    />
                                </Link>
                                <Link href="#"
                                      className="uppercase text-xs mt-3 mb-2 text-textColor font-heading">Fashion</Link>
                                <h2><Link href="#" className="text-2xl font-heading text-black">Must-See Moments from
                                    the Christian Dior Show</Link></h2>
                                <h3 className="text-xs uppercase text-textColor font-heading flex gap-3 items-center mt-2">

                                    <Link href="#"
                                          className="text-black font-heading text-xs inline-flex gap-1 items-center"><BiSolidEdit/> Milon
                                        Hossen</Link>
                                    <span className="font-heading inline-flex gap-1 items-center"><CiCalendarDate/> 23 Mar 2024</span>
                                </h3>
                            </FadeIn>
                        ))
                    }


                </div>
                <div className="text-center mt-14">
                    <Link href="/blog"
                          className="bg-primary py-3 px-10 text-sm uppercase font-heading text-black rounded-3xl">More
                        Posts</Link>
                </div>

            </Container>
        </div>
    )
}