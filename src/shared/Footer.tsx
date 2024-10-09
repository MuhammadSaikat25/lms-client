import footerImg from "../assets/bg_footer.png";
import gs from "../assets/google-play.webp";
import as from "../assets/app-store-apple.webp";
import ms from "../assets/microsoft.webp";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const name = "<Coding/> Hero";
  return (
    <footer
      className="bg-purple-950 pt-7 pb-5 text-white "
      style={{ backgroundImage: `url(${footerImg})` }}
    >
      <div className="relative flex flex-col  lg:flex lg:flex-row items-end lg:items-start justify-around gap-5 ">
        <div className="w-fit text-gray-300 mx-auto lg:mx-0">
          <p className="py-2">Office Address</p>
          <p>123 Main Street, Suite 100</p>
          <p>City, State, ZIP Code</p>
          <p>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>
        </div>
        <div className="w-fit text-gray-300 mx-auto lg:mx-0 mt-3 lg:mt-0 lg:mb-0  lg:gap-0">
          <h1 className="py-2">Useful Links</h1>
          <div className="flex flex-col ">
            {" "}
            <p>Blog</p>
            <p>Success</p>
            <p>About Us</p>
            <p>Privacy & App Privacy Policy</p>
          </div>
        </div>
        <div className="w-fit mx-auto text-gray-300 lg:mx-0 mt-3 lg:mt-0 lg:mb-0 lg:gap-0">
          <h1 className="">Follow us</h1>
          <div className="flex flex-col lg:flex lg:flex-row items-center gap-2 py-2">
            <img className="w-[100px]" src={gs} alt="" />
            <img className="w-[100px]" src={as} alt="" />
            <img className="w-[100px]" src={ms} alt="" />
          </div>
          <div className="flex flex-col lg:flex lg:flex-row items-center justify-around gap-2 py-2">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>
      <h1 className="text-center text-[16px] text-gray-300  my-12">
        © {name} {new Date().getFullYear()}
      </h1>
    </footer>
  );
};

export default Footer;
