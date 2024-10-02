import MenuContent from "./MenuContent";
import MenuContentLarge from "./MenuContentLarge";

function Menu() {
  return (
    <section id="menu" className="min-h-fit  bg-primary text-secondary ">
      <div className="xl:hidden">
        <MenuContent />
      </div>

      <div className="hidden xl:block">
        <MenuContentLarge />
      </div>
    </section>
  );
}

export default Menu;
