function Event() {
  return (
    <div className="flex flex-col h-[200px] w-[calc((100dvw-45px)/2)] overflow-hidden rounded">
      <div className="flex-1 relative">
        <img
          src="/images/event1.webp"
          alt="Event image 1"
          className="h-full w-full object-cover absolute inset-0"
        />
      </div>

      <div className="p-[5px] bg-primary text-secondary">
        <h4 className="font-primary text-[16px] pb-[5px]">Coffee Social</h4>
        <p>20/08/1993</p>
      </div>
    </div>
  );
}

export default Event;
