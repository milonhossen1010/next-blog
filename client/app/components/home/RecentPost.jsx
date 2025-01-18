"use client"
import Container from "@/app/components/Container";
import Image from "next/image";
import {Link} from "@nextui-org/react";
import {MdArrowRightAlt} from "react-icons/md";
import {BiSolidEdit} from "react-icons/bi";
import {CiCalendarDate} from "react-icons/ci";
import FadeIn from "@/app/components/FadeIn";
import SideBar from "@/app/components/home/SideBar";

export default function RecentPost() {
    return (
        <div className="py-20 ">
            <Container className="block md:grid md:grid-cols-3 gap-10">
                <div className="col-span-2">
                    <div className="flex  w-full items-center">
                        <div className="flex w-full gap-4 items-center">
                            <h2 className="text-4xl">Recent Post</h2>
                            <p className="text-textColor">Stay up-to-date</p>
                        </div>
                        <div className="hidden md:block border w-full border-borderColor h-[4px]"/>
                    </div>
                    
                   <div>
                       <FadeIn>
                           <div className="grid md:grid-cols-2 gap-8 items-center mt-10">
                               <Link href="#">
                                   <Image className="w-full"
                                          src={"https://chronicle.ancorathemes.com/wp-content/uploads/2020/03/image-95-642x428.jpg"}
                                          alt="img" width={400} height={350}/>
                               </Link>
                               <div>
                                   <Link href="#" className="text-xs uppercase text-textColor font-heading">Ideas</Link>
                                   <h2 className="mt-3 mb-4"><Link className="text-2xl font-heading text-black"
                                                                   href="#">What Should You Wear in Winter? Check Out
                                       Our Tips for Winter</Link></h2>
                                   <h3 className="text-xs uppercase text-textColor font-heading flex gap-3 items-center">

                                       <Link href="#"
                                             className="text-black font-heading text-xs inline-flex gap-1 items-center"><BiSolidEdit/> Milon
                                           Hossen</Link>
                                       <span className="font-heading inline-flex gap-1 items-center"><CiCalendarDate/> 23 Mar 2024</span>
                                   </h3>
                                   <p className="text-textColor mt-4 text-sm">Ritatis et quasi architecto beatae vitae
                                       dicta sunt explicabo emo enim ipsam.</p>
                                   <Link href="#" className="text-3xl mt-4 text-black"><MdArrowRightAlt/></Link>
                               </div>
                           </div>
                       </FadeIn>

                       <FadeIn>
                           <div className="grid md:grid-cols-2 gap-8 items-center mt-10">
                               <Link href="#">
                                   <Image className="w-full"
                                          src={"https://chronicle.ancorathemes.com/wp-content/uploads/2020/01/image-97-642x428.jpg"}
                                          alt="img" width={400} height={350}/>
                               </Link>
                               <div>
                                   <Link href="#" className="text-xs uppercase text-textColor font-heading">Ideas</Link>
                                   <h2 className="mt-3 mb-4"><Link className="text-2xl font-heading text-black"
                                                                   href="#">What Should You Wear in Winter? Check Out
                                       Our Tips for Winter</Link></h2>
                                   <h3 className="text-xs uppercase text-textColor font-heading flex gap-3 items-center">

                                       <Link href="#"
                                             className="text-black font-heading text-xs inline-flex gap-1 items-center"><BiSolidEdit/> Milon
                                           Hossen</Link>
                                       <span className="font-heading inline-flex gap-1 items-center"><CiCalendarDate/> 23 Mar 2024</span>
                                   </h3>
                                   <p className="text-textColor mt-4 text-sm">Ritatis et quasi architecto beatae vitae
                                       dicta sunt explicabo emo enim ipsam.</p>
                                   <Link href="#" className="text-3xl mt-4 text-black"><MdArrowRightAlt/></Link>
                               </div>
                           </div>
                       </FadeIn>

                       <FadeIn>
                           <div className="grid md:grid-cols-2 gap-8 items-center mt-10">
                               <Link href="#">
                                   <Image className="w-full"
                                          src={"https://chronicle.ancorathemes.com/wp-content/uploads/2020/01/image-98-642x428.jpg"}
                                          alt="img" width={400} height={350}/>
                               </Link>
                               <div>
                                   <Link href="#" className="text-xs uppercase text-textColor font-heading">Ideas</Link>
                                   <h2 className="mt-3 mb-4"><Link className="text-2xl font-heading text-black"
                                                                   href="#">What Should You Wear in Winter? Check Out
                                       Our Tips for Winter</Link></h2>
                                   <h3 className="text-xs uppercase text-textColor font-heading flex gap-3 items-center">

                                       <Link href="#"
                                             className="text-black font-heading text-xs inline-flex gap-1 items-center"><BiSolidEdit/> Milon
                                           Hossen</Link>
                                       <span className="font-heading inline-flex gap-1 items-center"><CiCalendarDate/> 23 Mar 2024</span>
                                   </h3>
                                   <p className="text-textColor mt-4 text-sm">Ritatis et quasi architecto beatae vitae
                                       dicta sunt explicabo emo enim ipsam.</p>
                                   <Link href="#" className="text-3xl mt-4 text-black"><MdArrowRightAlt/></Link>
                               </div>
                           </div>
                       </FadeIn>

                       <FadeIn>
                           <div className="grid md:grid-cols-2 gap-8 items-center mt-10">
                               <Link href="#">
                                   <Image className="w-full"
                                          src={"https://chronicle.ancorathemes.com/wp-content/uploads/2020/01/image-32-642x428.jpg"}
                                          alt="img" width={400} height={350}/>
                               </Link>
                               <div>
                                   <Link href="#" className="text-xs uppercase text-textColor font-heading">Ideas</Link>
                                   <h2 className="mt-3 mb-4"><Link className="text-2xl font-heading text-black"
                                                                   href="#">What Should You Wear in Winter? Check Out
                                       Our Tips for Winter</Link></h2>
                                   <h3 className="text-xs uppercase text-textColor font-heading flex gap-3 items-center">

                                       <Link href="#"
                                             className="text-black font-heading text-xs inline-flex gap-1 items-center"><BiSolidEdit/> Milon
                                           Hossen</Link>
                                       <span className="font-heading inline-flex gap-1 items-center"><CiCalendarDate/> 23 Mar 2024</span>
                                   </h3>
                                   <p className="text-textColor mt-4 text-sm">Ritatis et quasi architecto beatae vitae
                                       dicta sunt explicabo emo enim ipsam.</p>
                                   <Link href="#" className="text-3xl mt-4 text-black"><MdArrowRightAlt/></Link>
                               </div>
                           </div>
                       </FadeIn>
                   </div>

                </div>



                    <SideBar />

            </Container>
        </div>
    )
}