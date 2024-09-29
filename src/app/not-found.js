import Footer from "./components/Footer";
import Header from "./components/Header";

export default function NotFound() {
    return (
        <>
            <Header />
            <main id="MainContent" className="MainContent">
                <div className="page-width">
                    <div className="page-not-found">
                        <h2 className="center hxl">Comming Soon.....</h2>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
