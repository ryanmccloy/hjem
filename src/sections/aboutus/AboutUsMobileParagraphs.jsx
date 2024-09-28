import OpeningTimes from "../../components/OpeningTimes";

function AboutUsMobileParagraphs() {
  return (
    <div className=" flex-1 flex flex-col gap-[30px] pb-[30px]">
      <div className="pl-[15px] flex gap-[15px]  ">
        <OpeningTimes hidden={false} />
        <div className=" flex-1 relative ">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="/images/aboutus1.webp"
            alt="Fresh Pastries"
          />
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover transform scale-[175%] translate-x-[30%]"
          src="/images/aboutus2.jpg"
          alt="Coffee"
        />
      </div>

      <p className="px-[15px]">
        With a nod to Scandinavian interiors + design, the ethos behind
        &quot;HJEM.&quot; is born out of a belief that everyone should feel at
        home when they sit down to enjoy a coffee, a drink, or a bite to eat no
        matter where they are.
      </p>
      <p className="px-[15px]">
        The name reflects the location of the coffee house on the Belfast campus
        of the Ulster University - a University is a home - a place of origin
        for students as they embark on their life journey.
      </p>

      <div className="pr-[15px] flex gap-[15px]  ">
        <div className=" flex-1 relative ">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="/images/aboutus3.jpg"
            alt="Outside bench"
          />
        </div>
        <p className="w-[150px]">
          HJEM. is not just a place of origin for students but for staff,
          visitors, tourists and locals alike - a welcoming place in which to
          relax or grab a coffee before beginning the next part of a journey.
        </p>
      </div>
    </div>
  );
}

export default AboutUsMobileParagraphs;
