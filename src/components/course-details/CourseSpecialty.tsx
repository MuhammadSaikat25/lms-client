import "./courserDetails.css";
import bg from "../../assets/curve.png";

const CourseSpecialty = () => {
  return (
    <div className={`relative text-white`}>
      <img
        className="h-[900px] md:h-[600px] lg:h-[500px] w-full"
        src={bg}
        alt=""
      />
      <h1 className="text-center absolute z-10 top-5 left-[16%] md:left-[35%] lg:left-[40%] mb-16">
        What Is The Specialty_ Of This Course?
      </h1>
      <div className="gap-4 lg:w-[80%] grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 pt-6 mt-5 absolute top-8 left-[15%]">
        <div className="Specialty w-[300px] p-2 rounded hover:bg-[#FF978C] hover:text-black">
          <h1 className="mt-2">Web Development Complete Course</h1>
          <p>
            By watching a few videos, you will learn HTML, CSS and create two
            beautiful websites. And you can share those links with anyone.
          </p>
        </div>
        <div className=" Specialty w-[300px] p-2 rounded hover:bg-[#FF978C] hover:text-black">
          <h1 className="opacity-95">Unlimited Support</h1>
          <p>
            Any questions you may have will be answered within 24 hours during
            the course (except holidays).
          </p>
        </div>
        <div className="Specialty w-[300px] p-2 rounded hover:bg-[#FF978C] hover:text-black">
          <h1>Job Placement Coach</h1>
          <p>
            A couple of concepts to learn may not be clear to everyone at first
            glance. This is very normal.
          </p>
        </div>
        <div className="Specialty2 w-[300px] p-2 rounded hover:bg-[#FF978C] hover:text-black">
          <h1>International Job Placement</h1>
          <p>
            In the era of globalization, why is your job placement target only
            Bangladesh? Rather, target the world.
          </p>
        </div>
        <div className="Specialty2 w-[300px] p-2 rounded hover:bg-[#FF978C] hover:text-black">
          <h1>Advance Crash Course (ACC)</h1>
          <p>
            You're not just enrolling in a course at Programming Hero. You're
            embarking on a mission to learn lifelong web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseSpecialty;
