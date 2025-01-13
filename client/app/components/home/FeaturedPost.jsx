"use client";
import Container from "@/app/components/Container";
import FadeIn from "@/app/components/FadeIn";
import Image from "next/image";
import blogImg from "../../../public/blog/image-94.jpg"
import {Button, Link} from "@nextui-org/react";


export default function FeaturedPost() {
    return (
        <div className="bg-grayBg py-20 ">
            <Container>
                <FadeIn>
                    <div className="text-center flex items-end">
                        <span className='hidden border h-[4px] border-[#EAEAEA] md:block w-full'></span>
                        <h2 className="text-4xl w-full">Editor's Choice</h2>
                        <span className='hidden border h-[4px] border-[#EAEAEA] md:block w-full'></span>
                    </div>
                    <p className="text-textColor text-center">Articles Of The Day</p>
                </FadeIn>


                <div className="grid md:grid-cols-3  mt-10 gap-14 md:gap-7">
                    <div>
                        <Link href="#">
                            <Image className="mb-3 w-full" src={blogImg} alt="Blog Image" height={400} width={400}/>
                        </Link>
                        <div className="flex gap-2">
                            <Link href="#"
                                  className="text-xs font-heading text-textColor uppercase font-bold">Design</Link>
                            <Link href="#"
                                  className="text-xs font-heading text-textColor uppercase font-bold">Design</Link>
                        </div>
                        <Link href="#">
                            <h2 className="text-2xl mb-2 mt-2 text-black">The most iconic fashion designers of all
                                time</h2>
                        </Link>
                        <p className="text-textColor text-xs uppercase">27 May 2024</p>
                    </div>

                    <div>
                        <Link href="#">
                            <Image className="mb-3 w-full" src={blogImg} alt="Blog Image" height={400} width={400}/>
                        </Link>
                        <div className="flex gap-2">


                            <Link href="#"
                                  className="text-xs font-heading text-textColor uppercase font-bold">Design</Link>
                        </div>
                        <Link href="#">
                            <h2 className="text-2xl mb-2 mt-2 text-black">The most iconic fashion designers of all
                                time</h2>
                        </Link>
                        <p className="text-textColor text-xs uppercase">27 May 2024</p>
                    </div>

                    <div>
                        <Link href="#">
                            <Image className="mb-3 w-full" src={blogImg} alt="Blog Image" height={400} width={400}/>
                        </Link>
                        <div className="flex gap-2">
                            <Link href="#"
                                  className="text-xs font-heading text-textColor uppercase font-bold">Design</Link>
                            <Link href="#"
                                  className="text-xs font-heading text-textColor uppercase font-bold">Development</Link>
                        </div>
                        <Link href="#">
                            <h2 className="text-2xl mb-2 mt-2 text-black">The most iconic fashion designers of all
                                time</h2>
                        </Link>
                        <p className="text-textColor text-xs uppercase">27 May 2024</p>
                    </div>

                </div>

                <div className="mt-12 text-center">
                    <Link  href="#" className="bg-primary py-3 px-10 text-sm uppercase font-heading text-black rounded-3xl">More Posts</Link>
                </div>
            </Container>
        </div>
    )
}