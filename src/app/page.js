import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default async function Home() {

  return (
    <>
      <Header />
      <main id="MainContent" className="MainContent">

      </main>
      <Footer />
    </>
  );
}
