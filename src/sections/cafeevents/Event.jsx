function Event({ name, date, image_url }) {
  const dateObject = new Date(date);
  const formattedDate = new Intl.DateTimeFormat("en-GB").format(dateObject);

  return (
    <div className="flex flex-col h-[200px] w-[calc((100dvw-45px)/2)] overflow-hidden rounded">
      <div className="flex-1 relative">
        <img
          src={image_url}
          alt="Event image 1"
          className="h-full w-full object-cover absolute inset-0"
        />
      </div>

      <div className="p-[5px] bg-primary text-secondary">
        <h4 className="font-primary text-[16px] pb-[5px]">{name}</h4>

        <p>{formattedDate}</p>
      </div>
    </div>
  );
}

export default Event;
