import { useRef } from "react";

import ImageGallery from "./ImageGallery";
import ScrollButton from "./ScrollButton";

function Gallery() {
  const galleryRef = useRef(null);
  const eventsRef = useRef(null);

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
