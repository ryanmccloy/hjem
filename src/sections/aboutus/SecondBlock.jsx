function SecondBlock() {
  return (
    <div className="flex gap-[30px] h-[100%] lg:gap-[60px]">
      <div className="flex-1 relative">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/aboutus3.jpg"
          alt="Outside bench"
        />
      </div>

      <div className="  flex flex-col gap-[30px] max-w-[40%]">
        <p className="pr-[30px]">
          HJEM. is not just a place of origin for students but for staff,
          visitors, tourists and locals alike - a welcoming place in which to
          relax or grab a coffee before beginning the next part of a journey.
        </p>
        <div className="flex-1 relative">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="/images/aboutus2.jpg"
            alt="Coffee"
          />
        </div>
      </div>
    </div>
  );
}

export default SecondBlock;
