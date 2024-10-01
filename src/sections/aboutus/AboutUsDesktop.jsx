import FirstBlock from "./FirstBlock";
import SecondBlock from "./SecondBlock";

function AboutUsDestop() {
  return (
    <section className="h-screen-dvh min-h-[800px] py-[60px] flex flex-col gap-[60px] lg:gap-[60px] ">
      <FirstBlock />

      <div className="flex-1">
        <SecondBlock />
      </div>
    </section>
  );
}

export default AboutUsDestop;
