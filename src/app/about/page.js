import Image from "next/image";
import './about.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/sections/HeroBanner/HeroBanner";
import AboutShow from "../components/sections/AboutShow/AboutShow";
import ImageWithContent from "../components/sections/ImageWithContent/ImageWithContent";
import CompanyAgenda from "../components/sections/CompanyAgenda/CompanyAgenda";
import Surveysection from "../components/sections/Surveysection/Surveysection";
import Trustedpartner from "../components/sections/Trustespartner/Trustedpartner";
import TeachAtWhizangle from "../components/sections/Techatwhizangle/TeachAtWhizangle";

export default async function About() {
    return(
        <>
          <HeroBanner image_name="ignite_your_potential_banner" btn_title="Read More" btn_url="/" description="Join a community of visionary youth, where creativity meets opportunity, and entrepreneurial dreams become impactful realities." heading="Ignite Your Potential, <span class='blue-text'>Transform</span> Your <span class='blue-text'>Ideas</span> into Reality" customClass="about-hero-banner" />
          <AboutShow customClass="aboutpage-abs" heading="Our Programs Empower Your Future"  description="At WhizAngel, being an entrepreneur is a mindset—it's about taking control of your future and pursuing what truly matters. We empower you to lead, take initiative, solve problems, and leave the world better than you found it. Our inclusive community emphasizes diversity, ensuring that our businesses reflect the rich culture of our people. By joining us, you step into a future where opportunity, choice, and economic freedom are within reach for all."
            btn_title="JOIN WHIZANGEL NOW"
          />
          <Surveysection customClass="surevey-cusmtom" image_name="wii_be_oneofthem" description="Middle and high school entrepreneurship education is key to unlocking the potential of young minds, nurturing essential skills, and preparing for future careers. Do you see yourself as one of them?" />

          <ImageWithContent image_name="startup_ecosystem" customClass="about-page-image-with-section" heading="The Startup Ecosystem Thrives with Diversity" description="The startup ecosystem thrives on diversity, which fuels innovation and drives success by bringing together a rich tapestry of perspectives, experiences, and ideas. Embracing inclusivity and supporting underrepresented founders taps into untapped talent, leading to more robust and resilient businesses. Diverse teams enhance creativity, problem-solving, and market reach, ultimately propelling the startup ecosystem to new heights of innovation and prosperity." 
          btn_title="Read More"
          />
          <Trustedpartner customClass="trusted-partener" heading="Trusted by the World’s best Brands & Investors" description="Trusted by the world's best brands, we deliver excellence and innovation. With our commitment to quality and reliability, we've earned the trust of industry leaders globally. Join us and experience the difference trusted expertise can make." btn_title="Donate Now" />

          
          <TeachAtWhizangle customClass="about-page-tech" />
          <CompanyAgenda customClass="company-agenda" />
      </>
    )
}