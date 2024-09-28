import LandingPage from "./sections/landingpage/LandingPage";
import AboutUs from "./sections/aboutus/AboutUsMobile";
import Menu from "./sections/menu/Menu";
import Gallery from "./sections/gallery/Gallery";
import CafeEvents from "./sections/cafeevents/CafeEvents";
import Footer from "./sections/footer/Footer";

function App() {
  return (
    <>
      <LandingPage />

      <main>
        <AboutUs />

        <Menu />

        <Gallery />

        <CafeEvents />
      </main>

      <Footer />
    </>
  );
}

export default App;
