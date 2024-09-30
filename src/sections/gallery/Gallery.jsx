import { useEffect, useState, useRef } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

import "aos/dist/aos.css";
import AOS from "aos";

import ImageGallery from "./ImageGallery";

function Gallery() {
  const [showButton, setShowButton] = useState(false);
  const [isGalleryInView, setIsGalleryInView] = useState(false);
  const [isEventsInView, setIsEventsInView] = useState(false);

  const galleryRef = useRef(null);
  const eventsRef = useRef(null);

  useEffect(() => {
    // Observer for the gallery
    const galleryObserver = new IntersectionObserver(
      ([entry]) => {
        const isInView = entry.intersectionRatio >= 0.2; // Button appears when 20% of gallery is in view
        setIsGalleryInView(isInView);
      },
      {
        root: null, // Observe relative to the viewport
        threshold: 0.2, // Button shows when 20% of the gallery is in view
      }
    );

    // Observer for the events section
    const eventsObserver = new IntersectionObserver(
      ([entry]) => {
        const isInView = entry.isIntersecting;
        setIsEventsInView(isInView);
      },
      {
        root: null, // Observe relative to the viewport
        threshold: 0.1, // Adjust threshold as needed
      }
    );

    // Observe gallery and events sections
    if (galleryRef.current) {
      galleryObserver.observe(galleryRef.current);
    }
    if (eventsRef.current) {
      eventsObserver.observe(eventsRef.current);
    }

    // Cleanup observers on unmount
    return () => {
      if (galleryRef.current) {
        galleryObserver.unobserve(galleryRef.current);
      }
      if (eventsRef.current) {
        eventsObserver.unobserve(eventsRef.current);
      }
    };
  }, []);

  // Logic to show the button when the gallery is in view and events section is not in view
  useEffect(() => {
    if (isGalleryInView && !isEventsInView) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [isGalleryInView, isEventsInView]);

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
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

      {/* Skip button */}
      {showButton && (
        <div
          className="flex justify-center fixed bottom-[15px] left-0 right-0"
          data-aos="fade-up"
        >
          <button className="bg-primary mb-[30px] text-secondary p-2 rounded-full border border-primary hover:bg-secondary hover:text-primary transition-colors duration-300">
            <a href="#cafeevents">
              <MdOutlineKeyboardDoubleArrowDown size={30} />
            </a>
          </button>
        </div>
      )}

      {/* Invisible observer div at the bottom */}
      <div ref={eventsRef} className="absolute bottom-0 h-1"></div>
    </section>
  );
}

export default Gallery;
