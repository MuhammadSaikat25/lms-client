import { useState } from "react";
import img from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { useRegistrationMutation } from "../../redux/feature/auth/authApi";

const Registration = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [registration] = useRegistrationMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await registration({ email, password, name });
    navigate("/login");
  };

  return (
    <div className="bg-[#00001F] text-white h-screen relative">
      <form
        onSubmit={handleSubmit}
        className="bg-[#010313] z-50 left-[80px] bottom-[400px] lg:bg-[#080826] p-10 rounded-md absolute lg:left-[130px] lg:bottom-[260px]"
      >
        <h1 className="text-[#E8AAFF] text-3xl font-Poppins font-semibold mb-3">
          SignUp
        </h1>
        <div className="flex flex-col gap-6">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="bg-[#131237] rounded-md p-2 md:w-[300px] lg:w-[400px]"
            placeholder="Name"
            required
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="bg-[#131237] rounded-md p-2 md:w-[300px] lg:w-[400px]"
            placeholder="Email"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="bg-[#131237] rounded-md p-2 lg:w-[400px]"
            placeholder="Password"
            required
          />
          <button className="text-[#E8AAFF] border border-blue-700 rounded p-1 hover:bg-[#7D58EB] duration-500 font-Poppins font-semibold mb-3">
            Register
          </button>
        </div>
        <div className="flex items-center gap-3 justify-center">
          <h1>Already have an account?</h1>
          <Link to="/login" className="text-violet-600">
            Login
          </Link>
        </div>
      </form>
      <img
        className="h-full absolute z-10 lg:z-50 lg:right-0"
        src={img}
        alt="Login Image"
      />
    </div>
  );
};

export default Registration;
