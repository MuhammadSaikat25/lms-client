import { useEffect, useState } from "react";
import { useGetHeroQuery } from "../../../redux/feature/layout/layoutApi";

const HomeFaq = () => {
  const { data } = useGetHeroQuery("FAQ");
  const [questions, setQuestions] = useState<any[]>([]);
  const [visibleQuestionIndex, setVisibleQuestionIndex] = useState<
    number | null
  >(null);
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (data) {
      setQuestions(data.data?.faq);
    }
  }, [data]);

  const toggleAnswerVisibility = (index: number) => {
    setVisibleQuestionIndex(visibleQuestionIndex === index ? null : index);
  };

  return (
    <div
      className={`lg:w-[50%] relative p-4 rounded-md text-white ${
        scroll < 5207
          ? " bg-[#141431] text-gray-400 transition-colors duration-700"
          : "bg-[#604CC3] transition-colors duration-700  shadow-xl shadow-gray-700"
      } `}
    >
      {questions?.map((faq: any, index: number) => (
        <div key={index}>
          <div className="">
            <div
              onClick={() => toggleAnswerVisibility(index)}
              className="flex items-center justify-between cursor-pointer gap-1"
            >
              <h1 className="py-2">{faq.question}</h1>
              <span>
                {visibleQuestionIndex === index ? (
                  <span>-</span>
                ) : (
                  <span>+</span>
                )}
              </span>
            </div>
            {visibleQuestionIndex === index && (
              <div className="mt-1 mb-1">
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeFaq;
