import Banner from "@/app/components/home/Banner";
import FeaturedPost from "@/app/components/home/FeaturedPost";
import RecentPost from "@/app/components/home/RecentPost";
import VideoPost from "@/app/components/home/VideoPost";
import LatestPosts from "@/app/components/home/LatestPosts";

export default function Home() {
    return (
        <>
            <Banner/>
            <FeaturedPost/>
            <RecentPost />
            <VideoPost />
            <LatestPosts />
        </>
    );
}
