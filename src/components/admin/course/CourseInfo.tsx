import { FC } from "react";
import UseAxiosPublic from "../../../utils/UseAxiosPublic";

type Props = {
  courseInfo: any;
  active: number;
  setActive: (active: number) => void;
  setCourseInfo: (courseInfo: any) => void;
};

const CourseInfo: FC<Props> = ({
  active,
  courseInfo,
  setActive,
  setCourseInfo,
}) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setActive(active + 1);
  };
  const imageBB = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_PUBLIC_IMAGEBB
  }`;

  const handleFile = async (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          setCourseInfo({ ...courseInfo, thumbnail: reader.result });
        }
      };
      reader.readAsDataURL(file);

      const axiosPublic = UseAxiosPublic();

      const formData = new FormData();
      formData.append("image", file);

      try {
        const postImageRes = await axiosPublic.post(imageBB, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (postImageRes) {
          setCourseInfo({
            ...courseInfo,
            thumbnail: postImageRes.data.data.url,
          });
        }
      } catch (error) {}
    }
  };

  return (
    <div className=" text-center text-white  h-[100%] overflow-hidden overflow-y-scroll custom-scroll p-2">
      <h1 className="mb-5 font-m lg:hidden">Course Information</h1>
      <div className="w-[80%] mx-auto bg-[#080826] px-3 rounded-md py-1 h-fit">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="lg:flex flex-col gap-2">
            <label className="text-left" htmlFor="courseName">
              Course Name
            </label>
            <input
              className="bg-[#131237] rounded p-1 w-full"
              type="text"
              id="courseName"
              placeholder="Course Name"
              required
              value={courseInfo.name}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, name: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-left" htmlFor="courseDescription">
              Course Description
            </label>
            <textarea
              className="bg-[#131237] p-1 rounded"
              cols={20}
              rows={4}
              id="courseDescription"
              placeholder="Course Description"
              required
              value={courseInfo.description}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, description: e.target.value })
              }
            />
          </div>
          <div className="w-full lg:flex justify-between items-center gap-3">
            <div className="flex flex-col w-full">
              <label className="text-left" htmlFor="coursePrice">
                Price
              </label>
              <input
                className="bg-[#131237] rounded p-1 w-full"
                type="number"
                id="coursePrice"
                placeholder="Course Price"
                required
                value={courseInfo.price}
                onChange={(e: any) =>
                  setCourseInfo({ ...courseInfo, price: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-left" htmlFor="courseEstimatePrice">
                Estimate Price (Optional)
              </label>
              <input
                className="bg-[#131237] rounded p-1"
                type="number"
                id="courseEstimatePrice"
                placeholder="Course Estimate Price"
                value={courseInfo.estimatePrice}
                onChange={(e: any) =>
                  setCourseInfo({
                    ...courseInfo,
                    estimatePrice: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-left" htmlFor="courseTags">
              Course Tags
            </label>
            <input
              className="bg-[#131237] p-1 rounded"
              id="courseTags"
              placeholder="Course Tags"
              required
              value={courseInfo.tags}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, tags: e.target.value })
              }
            />
          </div>
          <div className="w-full lg:flex justify-between items-center gap-3">
            <div className="flex flex-col w-full">
              <label className="text-left" htmlFor="courseLevel">
                Course Level
              </label>
              <select
                className="bg-[#131237] rounded p-1"
                id="courseLevel"
                value={courseInfo.level || "beginner"}
                onChange={(e: any) =>
                  setCourseInfo({ ...courseInfo, level: e.target.value })
                }
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-left" htmlFor="demoUrl">
                Demo URL
              </label>
              <input
                className="bg-[#131237] rounded p-1"
                type="text"
                id="demoUrl"
                placeholder="Demo URL"
                required
                value={courseInfo.demoUrl}
                onChange={(e: any) =>
                  setCourseInfo({ ...courseInfo, demoUrl: e.target.value })
                }
              />
            </div>
          </div>
          <div className="w-full bg-[#131237] cursor-pointer text-center p-2 rounded-md mt-2">
            <input
              type="file"
              accept="image/*"
              id="file"
              className="hidden"
              onChange={handleFile}
            />
            <label htmlFor="file">
              Upload Image
              {courseInfo.thumbnail && (
                <img
                  className="w-full object-cover h-[180px]"
                  src={courseInfo.thumbnail}
                  alt=""
                />
              )}
            </label>
          </div>
          <br />
          <div className="text-right cursor-pointer">
            <input
              type="submit"
              value={"Next"}
              className="bg-blue-700 cursor-pointer text-white rounded px-4 hover:bg-purple-950 duration-300 w-fit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseInfo;
