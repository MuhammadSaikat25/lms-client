import { FC, useState } from "react";
import { MdOutlineAddLink } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import { FaLinkSlash } from "react-icons/fa6";

import { IoAddCircle } from "react-icons/io5";

type Props = {
  courseContentData: any;
  setCourseContentData: (courseContentData: any) => void;
  active: number;
  setActive: (active: number) => void;
  handelSubmit: any;
};

const CourseContent: FC<Props> = ({
  active,
  courseContentData,
  handelSubmit: handelCourseSubmit,
  setActive,
  setCourseContentData,
}) => {
  const [collapsedModules, setCollapsedModules] = useState<boolean[]>([]);
  const [collapsedVideos, setCollapsedVideos] = useState<boolean[]>([]);

  const [collapsedLinks, setCollapsedLinks] = useState<boolean[]>([]);

  const handleCollapseToggle = (index: number) => {
    const newCollapsedModules = [...collapsedModules];
    newCollapsedModules[index] = !newCollapsedModules[index];
    setCollapsedModules(newCollapsedModules);
  };

  const handleVideoCollapseToggle = (index: number) => {
    const newCollapsedVideos = [...collapsedVideos];
    newCollapsedVideos[index] = !newCollapsedVideos[index];

    setCollapsedVideos(newCollapsedVideos);
  };

  const handleLinkCollapseToggle = (index: number) => {
    const newCollapsedLinks = [...collapsedLinks];
    newCollapsedLinks[index] = !newCollapsedLinks[index];
    setCollapsedLinks(newCollapsedLinks);
  };

  const handelDeleteVideo = (courseIndex: number, videoIndex: number) => {
    const allCourse = [...courseContentData];
    if (allCourse[courseIndex].videos.length === 1) {
      toast.error("A video must be given", {
        duration: 1500,
      });
      return;
    }
    allCourse[courseIndex].videos.splice(videoIndex, 1);
    setCourseContentData(allCourse);
  };

  const handelDeleteLinks = (courseIndex: number, linkIndex: number) => {
    const allCourse = [...courseContentData];
    if (allCourse[courseIndex].linksUrl.length === 1) {
      toast.error("A Link must be given", {
        duration: 1500,
      });
      return;
    }
    allCourse[courseIndex].linksUrl.splice(linkIndex, 1);
    setCourseContentData(allCourse);
  };

  const addNewModule = () => {
    setCourseContentData([
      ...courseContentData,
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
        ],
      },
    ]);
  };

  const handelSubmit = (e: any) => {
    e.preventDefault();
  };

  const handelNext = () => {
    setActive(active + 1);
    handelCourseSubmit();
  };
  const handelDeleteModule = (index: number) => {
    if (courseContentData.length === 1) {
      toast.error("At least one module is required", {
        duration: 1500,
      });
      return;
    }

    const updatedModules = [...courseContentData];
    updatedModules.splice(index, 1);
    setCourseContentData(updatedModules);
  };
  return (
    <div className=" w-[80%] mx-auto text-white h-screen overflow-hidden overflow-y-scroll custom-scroll">
      <h1 className="text-center mt-3 lg:hidden">Course Content</h1>
      <Toaster />

      <form onSubmit={handelSubmit} className="mt-10">
        <div className="">
          {courseContentData?.map((course: any, i: number) => (
            <div
              key={i}
              className={`${
                i === 0 ? "mt-3" : "mt-6 lg:mt-10"
              } bg-[#080826] p-3`}
            >
              {/* ----------- Module --------------- */}
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <label htmlFor="">Module {i + 1}</label>
                  <div className="flex items-center gap-x-2">
                    <h1 onClick={() => handleCollapseToggle(i)}>
                      {collapsedModules[i] ? (
                        <FaLongArrowAltDown />
                      ) : (
                        <FaLongArrowAltUp />
                      )}
                    </h1>
                    <span onClick={() => handelDeleteModule(i)}>X</span>
                  </div>
                </div>
                {!collapsedModules[i] && (
                  <input
                    required
                    type="text"
                    placeholder="Module"
                    className="bg-[#131237] p-1 rounded"
                    value={course.module}
                    onChange={(e) => {
                      const allCourse = [...courseContentData];
                      allCourse[i].module = e.target.value;
                      setCourseContentData(allCourse);
                    }}
                  />
                )}
              </div>

              <div
                className={`transition-all duration-100 ${
                  collapsedModules[i]
                    ? "max-h-0 overflow-hidden"
                    : "max-h-[2000px]"
                }`}
              >
                {/* ----------- Links --------------- */}
                <div className="">
                  <div className="flex items-center justify-between mt-4">
                    <h1>
                      <FaLinkSlash />
                    </h1>
                    <h1 onClick={() => handleLinkCollapseToggle(i)}>
                      {collapsedLinks[i] ? (
                        <FaLongArrowAltDown />
                      ) : (
                        <FaLongArrowAltUp />
                      )}
                    </h1>
                  </div>
                  {collapsedLinks[i] ? (
                    <div className="mt-2">
                      <h2>Number of links: {course.linksUrl.length}</h2>
                    </div>
                  ) : (
                    course?.linksUrl?.map((link: any, linkIndex: number) => (
                      <div className="flex flex-col mt-4 gap-2" key={linkIndex}>
                        <div className="flex items-center justify-between">
                          <h1>link {linkIndex + 1}</h1>
                          <span onClick={() => handelDeleteLinks(i, linkIndex)}>
                            <MdDelete />
                          </span>
                        </div>
                        <input
                          required
                          type="text"
                          className="bg-[#131237] p-1 rounded"
                          value={link.title}
                          placeholder="Link Title"
                          onChange={(e) => {
                            const allCourse = [...courseContentData];
                            allCourse[i].linksUrl[linkIndex].title =
                              e.target.value;
                            setCourseContentData(allCourse);
                          }}
                        />
                        <input
                          required
                          type="text"
                          className="bg-[#131237] p-1 rounded"
                          value={link.url}
                          placeholder="Link Url"
                          onChange={(e) => {
                            const allCourse = [...courseContentData];
                            allCourse[i].linksUrl[linkIndex].url =
                              e.target.value;
                            setCourseContentData(allCourse);
                          }}
                        />
                      </div>
                    ))
                  )}
                  {!collapsedLinks[i] && (
                    <div
                      onClick={() => {
                        const allCourse = JSON.parse(
                          JSON.stringify(courseContentData)
                        );
                        allCourse[i].linksUrl.push({ title: "", url: "" });
                        setCourseContentData(allCourse);
                      }}
                      className="flex items-center gap-1 my-2 cursor-pointer"
                    >
                      <span>
                        <MdOutlineAddLink />
                      </span>
                      <h1>Add link</h1>
                    </div>
                  )}
                </div>
                {/* ------------ Video ----------------- */}
                <div className="">
                  <div className="flex items-center justify-between mt-4 w-full ">
                    <h1
                      onClick={() => handleVideoCollapseToggle(i)}
                      className="w-full"
                    >
                      {collapsedVideos[i] ? (
                        <div className="flex justify-between  w-full">
                          <h1>
                            <IoIosVideocam />
                          </h1>
                          <FaLongArrowAltDown />
                        </div>
                      ) : (
                        <div className="flex items-center justify-between w-full">
                          <h1>
                            <IoIosVideocam />
                          </h1>
                          <FaLongArrowAltUp />
                        </div>
                      )}
                    </h1>
                  </div>
                  {collapsedVideos[i] ? (
                    <div className="mt-2">
                      <h2>Number of videos: {course.videos.length}</h2>
                    </div>
                  ) : (
                    course?.videos?.map((video: any, videoIndex: number) => (
                      <div
                        className="flex flex-col mt-4 gap-2"
                        key={videoIndex}
                      >
                        <div className="flex items-center justify-between">
                          <h1>video {videoIndex + 1}</h1>
                          <span
                            onClick={() => handelDeleteVideo(i, videoIndex)}
                          >
                            <MdDelete />
                          </span>
                        </div>

                        <input
                          required
                          type="text"
                          className="bg-[#131237] p-1 rounded"
                          value={video.title}
                          placeholder="Video Title"
                          onChange={(e) => {
                            const allCourse = [...courseContentData];
                            allCourse[i].videos[videoIndex].title =
                              e.target.value;
                            setCourseContentData(allCourse);
                          }}
                        />
                        <input
                          required
                          type="text"
                          className="bg-[#131237] p-1 rounded"
                          value={video.url}
                          placeholder="Video Url"
                          onChange={(e) => {
                            const allCourse = [...courseContentData];
                            allCourse[i].videos[videoIndex].url =
                              e.target.value;
                            setCourseContentData(allCourse);
                          }}
                        />
                      </div>
                    ))
                  )}
                  {!collapsedVideos[i] && (
                    <div
                      onClick={() => {
                        const allCourse = JSON.parse(
                          JSON.stringify(courseContentData)
                        );
                        allCourse[i].videos.push({ title: "", url: "" });
                        setCourseContentData(allCourse);
                      }}
                      className="flex items-center gap-1 my-2 cursor-pointer"
                    >
                      <span>
                        <MdOutlineAddLink />
                      </span>
                      <h1>Add Video</h1>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </form>
      {/* ----------- handel add module----------- */}
      <div
        className="flex items-center gap-2 mt-2 cursor-pointer"
        onClick={addNewModule}
      >
        <span>
          <IoAddCircle />
        </span>
        <h1> Add New Module</h1>
      </div>
      <div className="flex items-center justify-between my-3">
        <div
          className=" bg-blue-700 cursor-pointer  text-white rounded px-4 hover:bg-purple-950 duration-300 w-fit"
          onClick={() => setActive(active - 1)}
        >
          Pre
        </div>
        <div className="text-right cursor-pointer" onClick={handelNext}>
          <input
            type="submit"
            value={"Next"}
            className="bg-blue-700 cursor-pointer text-white rounded px-4 hover:bg-purple-950 duration-300 w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
