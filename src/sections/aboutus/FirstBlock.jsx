function FirstBlock() {
  return (
    <div className="flex gap-[30px] lg:gap-[60px]">
      <div className=" pl-[30px] flex flex-col gap-[30px] max-w-[40%]">
        <h2>ABOUT US.</h2>
        <div className="flex flex-col  gap-[30px] ">
          <p>
            With a nod to Scandinavian interiors + design, the ethos behind
            &quot;HJEM.&quot; is borne out of a belief that everyone should feel
            at home when they sit down to enjoy a coffee, a drink, or a bite to
            eat no matter where they are.
          </p>
          <p>
            The name reflects the location of the coffee house on the Belfast
            campus of the Ulster University - a University is a home - a place
            of origin for students as they embark on their life journey.
          </p>
        </div>
      </div>

      <div className="flex-1 relative ">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/aboutus1.webp"
          alt="Fresh Pastries"
        />
      </div>
    </div>
  );
}

export default FirstBlock;
