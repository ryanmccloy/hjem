function Event({ name, date, image_url }) {
  const dateObject = new Date(date);
  const formattedDate = new Intl.DateTimeFormat("en-GB").format(dateObject);

  return (
    <div className="flex flex-col min-h-[200px] md:min-h-[250px]  overflow-hidden rounded shadow-sm ">
      <div className="flex-1 relative">
        <img
          src={image_url}
          alt="Event image 1"
          className="h-full w-full object-cover absolute inset-0"
        />
      </div>

      <div className="p-[5px] bg-primary text-secondary md:p-[10px]">
        <h4 className="font-primary tracking-wider text-[16px] pb-[5px] md:text-[18px]">
          {name}
        </h4>

        <p className="font-light">{formattedDate}</p>
      </div>
    </div>
  );
}

export default Event;

// w-[calc((100dvw-45px)/2)]
