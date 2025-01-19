"use client"
import Container from "@/app/components/Container";
import VideoPlayer from "@/app/components/home/VideoPlayer";
import {CiCalendarDate} from "react-icons/ci";
import {Link} from "@nextui-org/react";
import Image from "next/image";
import {extractVideoId} from "@/app/utils/extractVideoId";
import {useState} from "react";
import FadeIn from "@/app/components/FadeIn";

const videoList = [

    {
        videoId: "3JZ_D3ELwOQ",
        title: "Video 2",
        thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg",
        date: " 21 Mar 2024"
    },
    {
        videoId: "tgbNymZ7vqY",
        title: "Video 3",
        thumbnail: "https://img.youtube.com/vi/tgbNymZ7vqY/hqdefault.jpg",
        date: " 23 Mar 2024"
    },
    {
        videoId: "LFBOLx5KiME",
        title: "Video 4",
        thumbnail: "https://chronicle.ancorathemes.com/wp-content/uploads/2020/03/image-44-300x225.jpg",
        date: " 20 Mar 2020"
    },
];


export default function VideoPost(props) {
    const [video, setVideo] = useState({id:'tgbNymZ7vqY',title:"Chasing Slow Motion Shots in a Large City", date:" 23 Mar 2024"})

    return (
        <div className="bg-black py-10 md:py-20 ">
            <Container>

                <FadeIn>
                    <div className="flex  w-full items-center mb-8">
                        <div className="md:inline-flex w-full md:w-1/2 gap-4  items-center">
                            <h2 className="text-4xl text-white">Recent Video</h2>
                            <p className="text-textColor">Stay up-to-date</p>
                        </div>
                        <div className="hidden md:block border w-full border-[#2d3036] h-[4px]"/>
                    </div>
                </FadeIn>


                <div className="grid md:grid-cols-3 gap-10 ">

                    <div className="col-span-2">

                        <FadeIn>
                            <VideoPlayer videoId={video.id}/>
                            <h2 className="mt-7 mb-2 text-4xl text-white">{video.title}</h2>
                            <p className="font-heading inline-flex gap-1 items-center text-textColor text-xs uppercase">
                                <CiCalendarDate/> {video.date}</p>

                        </FadeIn>
                    </div>

                    <div>
                        {
                            videoList.map((video, index) => (
                                <FadeIn key={index}>
                                    <div className="flex items-center mb-4 gap-4">
                                        <button onClick={() => setVideo({id:video.videoId, title: video.title,date: video.date})} className="w-1/4">
                                            <Image
                                                src={video.thumbnail}
                                                alt="Post" width={400} height={400}/>
                                        </button>
                                        <div>
                                            <h2>
                                                <button
                                                    className="text-white text-[18px] font-heading">{video.title}</button>
                                            </h2>
                                            <span
                                                className="text-xs uppercase text-textColor font-heading inline-flex gap-1 items-center"><CiCalendarDate/> {video.date}</span>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))
                        }

                    </div>
                </div>
            </Container>
        </div>
    )
}