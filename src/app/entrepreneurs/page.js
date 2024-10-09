import Header from "../components/Header";
import HeroBanner from "../components/sections/HeroBanner/HeroBanner";
import '../about/about.css'

export default async function Entrepreneur() {
    return (
        <>
            <HeroBanner image_name="ignite_your_potential_banner" btn_title="Read More" btn_url="/" description="Join a community of visionary youth, where creativity meets opportunity, and entrepreneurial dreams become impactful realities." heading="Ignite Your  <span class='blue-text'> Entrepreneurial spark</span> students" customClass="about-hero-banner" />
        </>
    )
}