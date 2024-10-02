import { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const ScrollButton = ({ galleryRef, eventsRef }) => {
  const [showButton, setShowButton] = useState(false);
  const [isGalleryInView, setIsGalleryInView] = useState(false);
  const [isEventsInView, setIsEventsInView] = useState(false);

  useEffect(() => {
    // Observer for the gallery
    const galleryObserver = new IntersectionObserver(
      ([entry]) => {
        const isInView = entry.intersectionRatio >= 0.2; // Show when 20% of the gallery is in view
        setIsGalleryInView(isInView);
      },
      { root: null, threshold: 0.2 }
    );

    // Observer for the events section
    const eventsObserver = new IntersectionObserver(
      ([entry]) => {
        setIsEventsInView(entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );

    if (galleryRef.current) {
      galleryObserver.observe(galleryRef.current);
    }
    if (eventsRef.current) {
      eventsObserver.observe(eventsRef.current);
    }

    return () => {
      if (galleryRef.current) galleryObserver.unobserve(galleryRef.current);
      if (eventsRef.current) eventsObserver.unobserve(eventsRef.current);
    };
  }, [galleryRef, eventsRef]);

  // Toggle visibility based on view status
  useEffect(() => {
    setShowButton(isGalleryInView && !isEventsInView);
  }, [isGalleryInView, isEventsInView]);

  return (
    showButton && (
      <div
        className={`fixed bottom-[15px] left-0 right-0 flex justify-center transition-opacity duration-500 `}
        data-aos="fade-up"
      >
        <button className="bg-primary mb-[30px] text-secondary p-2 rounded-full border border-primary hover:bg-secondary hover:text-primary transition-colors duration-300">
          <a href="#cafeevents">
            <MdOutlineKeyboardDoubleArrowDown size={30} />
          </a>
        </button>
      </div>
    )
  );
};

export default ScrollButton;
