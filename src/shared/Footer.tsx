import footerImg from "../assets/bg_footer.png";

const Footer = () => {
  const name = "<Coding/> Hero";
  return (
    <footer
      className="bg-purple-950 pt-7 pb-5 text-white "
      style={{ backgroundImage: `url(${footerImg})` }}
    >
      <div className="relative lg:flex justify-center gap-5 ">
        <div className="w-fit mx-auto lg:mx-0">
          <p>Office Address</p>
          <p>123 Main Street, Suite 100</p>
          <p>City, State, ZIP Code</p>
          <p>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>
        </div>
        <div className="w-fit mx-auto lg:mx-0 mt-3 lg:mt-0 lg:mb-0 flex flex-wrap gap-5 lg:flex-col lg:gap-0">
          <h1>Useful Links</h1>
          <p>Blog</p>
          <p>Success</p>
          <p>About Us</p>
          <p>Privacy & App Privacy Policy</p>
        </div>
      </div>
      <h1 className="text-center mt-4">
        © {name} {new Date().getFullYear()}
      </h1>
    </footer>
  );
};

export default Footer;
