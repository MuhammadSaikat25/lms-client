import { useEffect, useState } from "react";
import { useGetHeroQuery } from "../../../redux/feature/layout/layoutApi";

const HomeFaq = () => {
  const { data } = useGetHeroQuery("FAQ");
  const [questions, setQuestions] = useState<any[]>([]);
  const [visibleQuestionIndex, setVisibleQuestionIndex] = useState<number | null>(null);
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
      className={`md:w-[70%] lg:w-[50%] right-16 relative p-4 rounded-md text-white ${
        scroll < 5207
          ? "text-gray-400 transition-colors duration-700"
          : "transition-colors duration-700"
      }`}
    >
      {questions?.map((faq: any, index: number) => (
        <div key={index}>
          <div>
            <div
              onClick={() => toggleAnswerVisibility(index)}
              className="flex items-center justify-between cursor-pointer gap-3"
            >
              <h1 className="py-2 text-2xl">{faq.question}</h1>
              <span>
                {visibleQuestionIndex === index ? <span>-</span> : <span>+</span>}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                visibleQuestionIndex === index ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="mt-1 mb-1 text-gray-300">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeFaq;
