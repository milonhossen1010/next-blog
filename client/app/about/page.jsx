import Container from "@/app/components/Container";
import Image from "next/image";
import FadeIn from "@/app/components/FadeIn";
import {FaFacebookF, FaInstagram, FaXTwitter, FaYoutube} from "react-icons/fa6";
import React from "react";

export default function About() {
    return (
        <div className="py-14 md:py-16" >
            <Container>
                {/*About Image*/}
                <div>
                    <Image
                        className="w-full"
                        src="https://chronicle.ancorathemes.com/wp-content/uploads/elementor/thumbs/image-44-qrv3o2yf2xhwof1ihabm3bmtj92ep2y1bxhf7c6mum.jpg"
                        alt="About Image" width={600} height={400}/>

                </div>

                {/*About text*/}
                <div className="max-w-screen-md mx-auto py-10">
                    <h2 className="text-2xl mb-4">Hello! Here we are.</h2>
                    <p className="text-textColor mb-8">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    <p className="text-textColor">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                        quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                        voluptatem.</p>
                </div>

                {/*About State*/}
                <div className="bg-grayBg py-10 px-5 grid md:grid-cols-5 gap-10 mt-5">
                    <div className="text-center">
                        <p className="text-3xl md:text-5xl mb-2">396</p>
                        <p className="font-heading text-sm">Perfect Posts</p>
                    </div>

                    <div className="text-center">
                        <p className="text-3xl md:text-5xl mb-2">1259</p>
                        <p className="font-heading text-sm">Social Shares</p>
                    </div>

                    <div className="text-center">
                        <p className="text-3xl md:text-5xl mb-2">178</p>
                        <p className="font-heading text-sm">Super Authors</p>
                    </div>

                    <div className="text-center">
                        <p className="text-3xl md:text-5xl mb-2">5123</p>
                        <p className="font-heading text-sm">Daily Visitors</p>
                    </div>
                </div>

                {/*Team Members*/}
                <div className="pt-14 pb-5">
                    <FadeIn className="mb-8">
                        <div className="text-center flex items-end  text-black">
                            <span className='hidden border h-[4px] border-[#EAEAEA] md:block w-full'></span>
                            <h2 className="text-4xl w-full">Our Team</h2>
                            <span className='hidden border h-[4px] border-[#EAEAEA] md:block w-full'></span>
                        </div>
                        <p className="text-textColor text-center">Optional Subtitle</p>
                    </FadeIn>
                    {/*Members*/}
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <Image className="w-full" src="https://chronicle.ancorathemes.com/wp-content/uploads/2020/01/image-102-590x590.jpg" alt="image" width={200} height={200} />
                            <h3 className="text-2xl mt-3 mb-1"> Henry</h3>
                            <p className="text-xs mb-4 text-textColor font-heading uppercase">Photographer</p>
                            <p className="text-sm mb-4 text-textColor">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque…
                            </p>
                            <div className="flex gap-4 justify-center">
                                <a href="#"><FaFacebookF/></a>
                                <a href="#"><FaXTwitter/></a>
                                <a href="#"><FaYoutube/></a>
                                <a href="#"><FaInstagram/></a>
                            </div>
                        </div>

                        <div className="text-center">
                            <Image className="w-full" src="https://chronicle.ancorathemes.com/wp-content/uploads/2020/01/image-102-590x590.jpg" alt="image" width={200} height={200} />
                            <h3 className="text-2xl mt-3 mb-1"> Henry</h3>
                            <p className="text-xs mb-4 text-textColor font-heading uppercase">Photographer</p>
                            <p className="text-sm mb-4 text-textColor">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque…
                            </p>
                            <div className="flex gap-4 justify-center">
                                <a href="#"><FaFacebookF/></a>
                                <a href="#"><FaXTwitter/></a>
                                <a href="#"><FaYoutube/></a>
                                <a href="#"><FaInstagram/></a>
                            </div>
                        </div>

                        <div className="text-center">
                            <Image className="w-full" src="https://chronicle.ancorathemes.com/wp-content/uploads/2020/01/image-102-590x590.jpg" alt="image" width={200} height={200} />
                            <h3 className="text-2xl mt-3 mb-1"> Henry</h3>
                            <p className="text-xs mb-4 text-textColor font-heading uppercase">Photographer</p>
                            <p className="text-sm mb-4 text-textColor">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque…
                            </p>
                            <div className="flex gap-4 justify-center">
                                <a href="#"><FaFacebookF/></a>
                                <a href="#"><FaXTwitter/></a>
                                <a href="#"><FaYoutube/></a>
                                <a href="#"><FaInstagram/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}