import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

type Props = {
  allCourse: any;
};

const CourseCard = ({ allCourse }: Props) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 w-fit mx-auto">
        {allCourse?.map((course: any, i: number) => (
          <Link to={`/course-details/${course._id}`}
            key={i}
            className="text-white border rounded-md bg-[#3A00AA] border-[#29017E] w-[250px]"
          >
            <img
              src={course.thumbnail}
              className="w-full h-[150px] object-contain"
              alt=""
            />
            <div className="p-2">
              <h1 title={course.name}>
                {course.name.length > 20
                  ? course.name.slice(0, 20)
                  : course.name}
                {course.name.length > 20 && "..."}
              </h1>

              <section className="flex items-center gap-2">
                <Rating
                  name="half-rating-read"
                  readOnly
                  defaultValue={course.ratings || 0}
                  precision={0.5}
                />
                <span>({course.purchased})</span>
              </section>
              <h1>$: {course.price}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
