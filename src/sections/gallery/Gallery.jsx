import { useEffect, useRef } from "react";
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
      once: true, // Use `once: true` to prevent multiple triggers
      mirror: false, // Disable mirror for clean behavior
    });

    AOS.refresh(); // Refresh AOS to recognize elements after initial render
  }, []);

  return (
    <section
      id="gallery"
      className="relative flex flex-col pb-[15px] md:pb-[30px]"
      ref={galleryRef}
    >
      <h2 className="py-[30px] pl-[15px] self-start md:py-[60px] pl-[30px]">
        GALLERY.
      </h2>
      <ImageGallery />

      {/* ScrollButton component */}
      <ScrollButton galleryRef={galleryRef} eventsRef={eventsRef} />

      {/* Invisible observer div at the bottom */}
      <div ref={eventsRef} className="absolute bottom-0"></div>
    </section>
  );
}

export default Gallery;
