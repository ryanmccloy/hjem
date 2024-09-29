import ImageGallery from "./ImageGallery";

function Gallery() {
  return (
    <section id="gallery" className="flex flex-col">
      <h2 className="py-[30px] pl-[15px] self-start">GALLERY.</h2>

      <ImageGallery />
    </section>
  );
}

export default Gallery;
