import { FC, useEffect, useState } from "react";

import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  useGetAllCourseQuery,
  useUpdateCourseMutation,
} from "../../../redux/feature/course/courseApi";
import CourseInfo from "../create-course/CourseInfo";
import CourseData from "../create-course/CourseData";
import CourseContent from "../create-course/CourseContent";
import CoursePreview from "../create-course/CoursePreview";
import CourseOption from "../create-course/CourseOption";

type Props = {
  id: string;
};
const EditCourseComponent: FC<Props> = ({ id }) => {
  const navigate = useNavigate();
  const { data: allCourse, refetch } = useGetAllCourseQuery(undefined);
  const [updateCourse, { isSuccess, data }] = useUpdateCourseMutation();
  const editCourseData = allCourse?.data.find(
    (course: any) => course._id === id
  );

  const [active, setActive] = useState(0);
  const [courseInfo, setCourseInfo] = useState({
    name: "",
    description: "",
    price: "",
    estimatePrice: "",
    tags: "",
    level: "",
    demoUrl: "",
    thumbnail: "",
  });
  const [benefit, setBenefit] = useState([{ title: "" }]);
  const [prerequisites, setPrerequisites] = useState([{ title: "" }]);
  const [courseContentData, setCourseContentData] = useState([
    {
      module: "",
      linksUrl: [
        {
          title: "",
          url: "",
        },
      ],
      videos: [
        {
          title: "",
          url: "",
        },
        {
          title: "",
          url: "",
        },
      ],
    },
  ]);
  const [courseData, setCourseData] = useState({});

  const handelSubmit = async () => {
    const benefits = benefit.map((benefit) => ({ title: benefit.title }));
    const prerequisite = prerequisites.map((prerequisite) => ({
      title: prerequisite.title,
    }));
    const courseContent = courseContentData.map((course) => ({
      module: course.module,
      linksUrl: course.linksUrl.map((link) => ({
        title: link.title,
        url: link.url,
      })),
      videos: course.videos.map((video) => ({
        title: video.title,
        url: video.url,
      })),
    }));
    const data = {
      name: courseInfo.name,
      description: courseInfo.description,
      price: courseInfo.price,
      estimatePrice: courseInfo.estimatePrice,
      tags: courseInfo.tags,
      level: courseInfo.level,
      demoUrl: courseInfo.demoUrl,
      thumbnail: "",
      benefits,
      prerequisite,
      courseContent,
    };
    setCourseData(data);
  };
  const handelCourseCreate = async (e: any) => {
    const course = courseData;
    await updateCourse({ id: editCourseData._id, updateData: course });
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Course update Successful");
      navigate("/admin/courses");
    }
  }, [data, isSuccess]);

  useEffect(() => {
    if (editCourseData) {
      setCourseInfo({
        name: editCourseData.name,
        description: editCourseData.description,
        price: editCourseData.price,
        estimatePrice: editCourseData.estimatePrice,
        tags: editCourseData.tags,
        level: editCourseData.level,
        demoUrl: editCourseData.demoUrl,
        thumbnail: editCourseData.thumbnail,
      });
      setPrerequisites(editCourseData.prerequisite);
      setBenefit(editCourseData.benefits);
      setCourseContentData(editCourseData.courseContent);
    }
    refetch();
  }, [editCourseData]);

  return (
    <div className=" w-full flex justify-between min-h-screen ">
      <div className="w-[80%] ">
        {active === 0 && (
          <CourseInfo
            courseInfo={courseInfo}
            setCourseInfo={setCourseInfo}
            active={active}
            setActive={setActive}
          />
        )}
        {active === 1 && (
          <CourseData
            benefit={benefit}
            setPrerequisites={setPrerequisites}
            prerequisite={prerequisites}
            setBenefit={setBenefit}
            active={active}
            setActive={setActive}
          />
        )}
        {active === 2 && (
          <CourseContent
            courseContentData={courseContentData}
            setCourseContentData={setCourseContentData}
            active={active}
            setActive={setActive}
            handelSubmit={handelSubmit}
          />
        )}
        {active === 3 && (
          <CoursePreview
            active={active}
            setActive={setActive}
            courseData={courseData}
            handelCourseCreate={handelCourseCreate}
            updateCourse={true}
          />
        )}
      </div>
      <div className="w-[10%] lg:w-[20%] mt-[100px] h-screen fixed z-[1] top-12 right-11">
        <Toaster />
        <CourseOption active={active} />
      </div>
    </div>
  );
};

export default EditCourseComponent;
