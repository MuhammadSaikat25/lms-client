import icon from "../../assets/check.png";

const CourseInfo = () => {
  return (
    <div className="gradient-background1 text-white p-10 ">
      <div className="lg:w-[70%] mx-auto grid  lg:grid-cols-2 gap-3">
        <div className="w-full bg-[#211A30] rounded p-3">
          <section className="flex items-center gap-3">
            <img src={icon} alt="" />
            <h1 className="text-green-500">Foundations First </h1>
          </section>
          <p className="pl-[45px]">
            Begin your journey with the basics, learning HTML, CSS, Tailwind and
            DaisyUI
          </p>
        </div>
        <div className="w-full bg-[#211A30] rounded p-3">
          <section className="flex items-center gap-3">
            <img src={icon} alt="" />
            <h1 className="text-green-500">Practical Application</h1>
          </section>
          <p className="pl-[45px]">
            Put theory into practice by working on over 45 projects throughout
            the course.
          </p>
        </div>
        <div className="w-full bg-[#211A30] rounded p-3">
          <section className="flex items-center gap-3">
            <img src={icon} alt="" />
            <h1 className="text-green-500">Unlimited Support</h1>
          </section>
          <p className="pl-[45px]">
            Benefit from a fun and interactive learning strategy developed by
            Coding Hero, refined through years of teaching experience, to help
            you complete the course successfully.
          </p>
        </div>
        <div className="w-full bg-[#211A30] rounded p-3">
          <section className="flex items-center gap-3">
            <img src={icon} alt="" />
            <h1 className="text-green-500">Engaging Learning Approach</h1>
          </section>
          <p className="pl-[45px]">
            Benefit from a fun and interactive learning strategy developed by
            Coding Hero, refined through years of teaching experience, to help
            you complete the course successfully.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
