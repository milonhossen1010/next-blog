import Banner from "@/app/components/home/Banner";
import FeaturedPost from "@/app/components/home/FeaturedPost";
import RecentPost from "@/app/components/home/RecentPost";

export default function Home() {
    return (
        <>
            <Banner/>
            <FeaturedPost/>
            <RecentPost />
        </>
    );
}
