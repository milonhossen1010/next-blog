import Image from "next/image";
import {FaFacebookF, FaInstagram, FaXTwitter, FaYoutube} from "react-icons/fa6";
import {Link} from "@nextui-org/react";
import {CiCalendarDate} from "react-icons/ci";

export default function SideBar() {
    return (<div>
        <div className='p-10 border border-borderColor mb-12'>
            <Image
                className="w-full"
                src="https://chronicle.ancorathemes.com/wp-content/uploads/2021/11/banner-2.png"
                width={400}
                height={400}
                alt="Image"
            />
        </div>
        <div className="border-b pb-12">
            <h2 className="text-xl uppercase text-center mb-8">Follow Us</h2>
            <div className="flex items-center justify-between mb-4">
                <Link href="#" className="flex gap-3 items-center text-black">
                    <span className="border rounded-3xl p-3"><FaFacebookF/></span>
                    <span className="font-heading hover:text-primary">LIKE</span>
                </Link>
                <p>3K</p>
            </div>

            <div className="flex items-center justify-between mb-4">
                <Link href="#" className="flex gap-3 items-center text-black ">
                    <span className="border rounded-3xl p-3"><FaXTwitter/></span>
                    <span className="font-heading hover:text-primary">FOLLOWERS</span>
                </Link>
                <p>5K</p>
            </div>

            <div className="flex items-center justify-between mb-4">
                <Link href="#" className="flex gap-3 items-center text-black">
                    <span className="border rounded-3xl p-3"><FaYoutube/></span>
                    <span className="font-heading hover:text-primary">SUBSCRIBE</span>
                </Link>
                <p>12K</p>
            </div>

            <div className="flex items-center justify-between mb-4">
                <Link href="#" className="flex gap-3 items-center text-black">
                    <span className="border rounded-3xl p-3"><FaInstagram/></span>
                    <span className="font-heading hover:text-primary">FOLLOWERS</span>
                </Link>
                <p>30K</p>
            </div>

        </div>
        <div className="mt-16">
            <h2 className="text-xl uppercase text-center mb-10">Trending Posts</h2>
            <div>




                <div className="flex items-center mb-4 gap-4">
                    <Link className="w-1/4"  href="#"><Image src="https://chronicle.ancorathemes.com/wp-content/uploads/2020/01/image-101-410x430.jpg"
                                 alt="Post" width={400} height={400}/></Link>
                    <div>
                        <h2><Link href="#" className="text-black text-[18px] font-heading">Street-Style Inspired T...</Link>
                        </h2>
                        <span
                            className="text-xs uppercase text-textColor font-heading inline-flex gap-1 items-center"><CiCalendarDate/> 23 Mar 2024</span>
                    </div>
                </div>

                <div className="flex items-center mb-4 gap-4">
                    <Link className="w-1/4"  href="#"><Image src="https://chronicle.ancorathemes.com/wp-content/uploads/2020/01/image-101-410x430.jpg"
                                 alt="Post" width={400} height={400}/></Link>
                    <div>
                        <h2><Link href="#" className="text-black text-[18px] font-heading">Street-Style Inspired T...</Link>
                        </h2>
                        <span
                            className="text-xs uppercase text-textColor font-heading inline-flex gap-1 items-center"><CiCalendarDate/> 23 Mar 2024</span>
                    </div>
                </div>

                <div className="flex items-center mb-4 gap-4">
                    <Link className="w-1/4"  href="#"><Image src="https://chronicle.ancorathemes.com/wp-content/uploads/2020/01/image-101-410x430.jpg"
                                 alt="Post" width={400} height={400}/></Link>
                    <div>
                        <h2><Link href="#" className="text-black text-[18px] font-heading">Street-Style Inspired T...</Link>
                        </h2>
                        <span
                            className="text-xs uppercase text-textColor font-heading inline-flex gap-1 items-center"><CiCalendarDate/> 23 Mar 2024</span>
                    </div>
                </div>


            </div>
        </div>
    </div>)
}