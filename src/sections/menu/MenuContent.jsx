import DrinkMenu from "./DrinkMenu";
import MenuParagraphs from "./MenuParagraphs";

function MenuContent() {
  return (
    <div className=" pt-[30px] px-[15px] md:pt-[60px] md:px-[30px]">
      <h2 className="text-right pb-[30px]">MENU.</h2>

      <div className="flex flex-col gap-[30px] md:gap-[90px]">
        <DrinkMenu />
        <MenuParagraphs />
        <div className="-mx-[15px] relative overflow-hidden h-[15dvh] md:-mx-[30px]  ">
          <img
            className="absolute inset-0  w-full h-full object-cover "
            src="/images/menu.jpg"
            alt="Coffee on a bench"
          />
        </div>
      </div>
    </div>
  );
}

export default MenuContent;
