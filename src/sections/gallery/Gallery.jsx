import { useRef, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

import ImageGallery from "./ImageGallery";
import ScrollButton from "./ScrollButton";

function Gallery() {
  const galleryRef = useRef(null);
  const eventsRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section
      id="gallery"
      className="relative flex flex-col pb-[15px]"
      ref={galleryRef}
    >
      <h2 className="py-[30px] pl-[15px] self-start">GALLERY.</h2>
      <ImageGallery />

      {/* ScrollButton component */}
      <ScrollButton galleryRef={galleryRef} eventsRef={eventsRef} />

      {/* Invisible observer div at the bottom */}
      <div ref={eventsRef} className="absolute bottom-0"></div>
    </section>
  );
}

export default Gallery;
