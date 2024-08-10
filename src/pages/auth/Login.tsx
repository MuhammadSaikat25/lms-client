import { useState } from "react";
import { Link } from "react-router-dom";
import img from '../../assets/login.png'
const Login = () => {

  const [email, setEmail] = useState("minhajulsaikat008@gmail.com");
  const [password, setPassword] = useState("123456");


  const handelSubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="bg-[#00001F] h-screen relative text-white ">
      <form
        onSubmit={handelSubmit}
        className="bg-[#010313] z-50 left-[80px] bottom-[400px] lg:bg-[#080826] p-10 rounded-md absolute lg:left-[130px] lg:bottom-[260px] "
      >
        <h1 className="text-white text-3xl font-Poppins font-semibold mb-3">
          Login
        </h1>
        <div className="flex flex-col gap-6">
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#131237] rounded-md p-2 md:w-[300px] lg:w-[400px]"
            placeholder="Email"
            required
          />
          <input
            type="password"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#131237] rounded-md p-2 lg:w-[400px]"
            placeholder="Password"
            required
          />
          <button className="text-[#E8AAFF] border border-blue-700 rounded  p-1 hover:bg-[#7D58EB] duration-500 font-Poppins font-semibold mb-3">
            Login
          </button>
        </div>
        <div className="flex items-center gap-3 justify-center">
          <h1>New user?</h1>
          <Link to={"/register"} className="text-violet-600">
            Register Here
          </Link>
        </div>
      </form>
      {/* -------------- image --------------- */}
      <img
        className="h-full absolute z-10 lg:z-50 lg:right-0  "
        src={img}
        alt="Login Image"
      />
    </div>
  );
};

export default Login;
