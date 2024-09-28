import DrinkMenu from "./DrinkMenu";
import MenuParagraphs from "./MenuParagraphs";

function Menu() {
  return (
    <section
      id="menu"
      className=" min-h-[800px] bg-primary text-secondary pt-[30px] px-[15px]"
    >
      <h2 className="text-right pb-[30px]">MENU.</h2>

      <div className="flex flex-col gap-[30px]">
        <DrinkMenu />
        <MenuParagraphs />
        <div className="-mx-[15px] relative overflow-hidden h-[15dvh] bg-red-500">
          <img
            className="absolute inset-0  w-full h-full object-cover "
            src="/images/menu.jpg"
            alt="Coffee on a bench"
          />
        </div>
      </div>
    </section>
  );
}

export default Menu;
