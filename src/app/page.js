import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import GlobalCount from "./components/GlobalCount";
import AboutShow from "./components/AboutShow";
import ImageWithContent from "./components/ImageWithContent";


export default async function Home() {

  return (
    <>
      <Header />
      <main id="MainContent" className="MainContent">
        <HeroBanner btn_title="Read More" btn_url="/" description="Join us on a transformative journey where young talents are paired with industry leaders and sponsors eager to foster the next generation of innovators. Here, every idea has the potential to change the world." heading="Empowering <span class='blue-text'>Youth Entrepreneurs</span>, Turning Ambitious Ideas into Lasting Impact" customClass="index-hero-banner" />
        <GlobalCount />
        <AboutShow heading="What is WhizAngel?" subHeading="A Platform for Young Visionaries" description="WhizAngel is a beacon for young entrepreneurs bursting with ideas and talent yet to be discovered. We believe in the power of youthful innovation to reshape the future, recognizing that these brilliant minds simply need the right guidance and resources to turn their dreams into reality.
Our mission is to bridge the gap between these promising young innovators and the mentors and sponsors eager to support their journey. WhizAngel is more than a platform; it's a community dedicated to nurturing the entrepreneurial spirit, ensuring that no vision is too bold and no idea too daring."
          btn_title="JOIN WHIZANGEL NOW"
        />
        <ImageWithContent image_name="team_image" customClass="index-image-withcontent" heading="Where Dreams Meet Opportunity" description="Join us at WhizAngel as we build a future lit by the achievements of the next generation of leaders and innovators. Together, we're not just dreaming of a brighter future; we're making it a reality." 
        btn_title="Explore Now"
        />
        <ImageWithContent image_name="youth_entrepreneur" customClass="index-image-youth" heading="Every youth can become an Entrepreneur" description="Every young individual has the potential to become an entrepreneur when given the right support and opportunities. By fostering an entrepreneurial mindset early on and providing access to education, mentorship, and resources, we empower youth to innovate, create jobs, and drive economic growth. With encouragement to explore new ideas, take calculated risks, and learn from challenges, young people can evolve into resilient problem-solvers and impactful changemakers." 
        btn_title="Read More"
        />
      </main>
      <Footer />
    </>
  );
}
