import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

function ImageGallery() {
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.webp",
    "/images/gallery3.jpg",
    "/images/gallery4.webp",
    "/images/gallery5.webp",
    "/images/gallery6.webp",
    "/images/gallery7.jpg",
    "/images/gallery8.jpg",
    "/images/gallery9.webp",
    "/images/gallery10.webp",
    "/images/gallery11.webp",
    "/images/gallery12.jpg",
    "/images/gallery13.webp",
    "/images/gallery14.webp",
    "/images/gallery15.webp",
    "/images/gallery16.heic",
  ];

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation lasts 800ms for a smooth effect
      easing: "ease-in-out", // Smooth easing effect
      offset: 100, // Starts when 100px of the element is in view
      delay: 100, // Delay between each image animation (stagger effect)
      once: false, // Animation happens only once, no repeat on scroll up
      mirror: true, // Do not animate on scroll back up for a clean look
    });
  }, []);

  return (
    <div id="gallery">
      <div className="grid grid-cols-2 auto-rows-[200px] sm:grid-cols-3 gap-[15px] gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden" data-aos="zoom-in-up">
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
