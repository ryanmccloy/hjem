import { CiFacebook, CiInstagram, CiLocationOn } from "react-icons/ci";

function Socials({ size }) {
  const sizes = {
    sm: "text-[20px]",
    md: "text-[30px]",
  };

  const iconStyle = ` ${
    sizes[size] || "text-[30px]"
  } hover:scale-110  hover:rotate-12  transition-all duration-300 `;

  return (
    <div className="flex gap-[10px]">
      <a
        href="https://www.instagram.com/hjem.belfast/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <CiInstagram className={`${iconStyle}`} />
      </a>

      <a
        href="https://www.facebook.com/p/HJEM-100088546853148/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <CiFacebook className={`${iconStyle}`} />
      </a>
      <a
        href="https://www.google.com/maps/place/HJEM.BELFAST/@54.6035123,-5.9312831,17z/data=!3m1!4b1!4m6!3m5!1s0x48610966d706dc01:0xc28dc21625023df2!8m2!3d54.6035123!4d-5.9287082!16s%2Fg%2F11k3tlf0h7?entry=ttu&g_ep=EgoyMDI0MDkyMy4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google maps location"
      >
        <CiLocationOn className={`${iconStyle}`} />
      </a>
    </div>
  );
}

export default Socials;
