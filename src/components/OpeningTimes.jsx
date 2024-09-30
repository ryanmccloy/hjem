function OpeningTimes({ where }) {
  return (
    <div className="flex flex-col gap-[15px] min-w-max h-max">
      {where === "landingpage" && <h3>Opening Times</h3>}

      <ul className="font-light">
        <li>Monday: 8am-4pm</li>
        <li>Tuesday: 8am-4pm</li>
        <li>Wednesday: 8am-4pm</li>
        <li>Thursday: 8am-4pm</li>
        <li>Friday: 8am-4pm</li>
        <li>Saturday: 8am-4pm</li>
        <li>Sunday: 8am-4pm</li>
      </ul>
    </div>
  );
}

export default OpeningTimes;
