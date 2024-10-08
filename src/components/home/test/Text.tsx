import HeaderLogo from "./HeaderLogo";
import "./text.css";
const Text = () => {
  return (
    <div className=" flex items-center justify-center">
      <HeaderLogo />
      <div className="flex flex-col">
        <h1 className="text text-[#8D67FC]" data-text="Lest's_code">
          Lest's_code
        </h1>
        <h1 className="text my-3 text-[#8D67FC]" data-text=" Your_Career">
          Your_Career
        </h1>
      </div>
    </div>
  );
};

export default Text;
