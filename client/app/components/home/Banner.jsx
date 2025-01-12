"use client"
import bannerImg from "../../../public/blog/banner1.jpg"
import FadeIn from "@/app/components/FadeIn";


export default function Banner() {
    return (
        <div
            className=" min-h-[70vh] flex items-center justify-center relative bg-no-repeat bg-cover before:absolute before:bg-black before:top-0 before:w-full before:h-full before:opacity-20"
            style={{"backgroundImage": `url(${bannerImg.src})`}}>
            <FadeIn className="text-center text-white max-w-[700px] z-20">

                    <div className="text-xs font-heading uppercase  bg-black inline px-2 py-1 rounded-xl">Creative</div>
                    <h2 className="text-3xl md:text-5xl mt-6 mb-8">Amazing Fashion Photography from Milan Week</h2>
                    <p className="font-heading">26 Mar 2024</p>

            </FadeIn>
        </div>
    )
}