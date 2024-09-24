import { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  useGetReviewQuery,
  usePostReviewMutation,
} from "../../redux/feature/review/reviewApi";
import { Toaster, toast } from "react-hot-toast";
type Props = {
  enrollCourses: { [key: string]: any }[];
};

const MyEnrollCourses = ({ enrollCourses }: Props) => {
  const navigate = useNavigate();
  const wName = "<Coding/> Hero";
  const [postReview] = usePostReviewMutation();
  const { data: reviewData } = useGetReviewQuery(undefined);
  const [ratings, setRatings] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    if (reviewData && reviewData.success) {
      const initialRatings: { [key: string]: number } = {};
      reviewData.data.forEach((review: any) => {
        initialRatings[review.course] = review.rating;
      });
      setRatings(initialRatings);
    }
  }, [reviewData]);

  const handleRatingChange = async (
    courseId: string,
    newValue: number | null
  ) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [courseId]: newValue || 0,
    }));

    const res = await postReview({ ratings: newValue, id: courseId });
    if (res.data) {
      toast.success("Rating successful");
    }
  };

  return (
    <div className="text-white p-2 lg:p-0">
      <Toaster />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {enrollCourses &&
          enrollCourses.map((course: any, i: number) => (
            <div
              key={i}
              className="bg-[#110630] p-3 rounded border border-blue-600 flex gap-4"
            >
              <div>
                <img
                  src={course.thumbnail}
                  className="w-[150px] lg:w-[250px] h-[100px] object-cover"
                  alt="Course Thumbnail"
                />
              </div>
              <div className="">
                <h1 className="text-purple-400">{course.name}</h1>
                <h1 className="webName">{wName}</h1>
                <button
                  className="Impact px-2 rounded-3xl text-[13px]"
                  onClick={() => navigate(`/course-access/${course._id}`)}
                >
                  Continue Course
                </button>
                <Rating
                  className=""
                  name={`course-rating-${course._id}`}
                  value={ratings[course._id] || 0}
                  precision={0.5}
                  onChange={(_, newValue) =>
                    handleRatingChange(course._id, newValue)
                  }
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyEnrollCourses;
