import { useEffect, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import {
  useGetHeroQuery,
  useUpdateHeroMutation,
} from "../../../redux/feature/layout/layoutApi";

const FaqUi = () => {
  const { data, refetch } = useGetHeroQuery("FAQ");
  const [questions, setQuestions] = useState<any[]>([]);
  const [visibleQuestionIndex, setVisibleQuestionIndex] = useState<
    number | null
  >(null);
  const [addFaq, setAddFaq] = useState(false);
  const [addQuestion, setAddQuestion] = useState("");
  const [addAnswer, setAddAnswer] = useState("");
  const [updateHero, { error, isSuccess }] = useUpdateHeroMutation();

  useEffect(() => {
    if (data) {
      setQuestions(data.data?.faq);
    }
  }, [data]);

  const toggleAnswerVisibility = (index: number) => {
    setVisibleQuestionIndex(visibleQuestionIndex === index ? null : index);
  };

  const handleAdd = () => {
    setAddFaq(!addFaq);
  };

  const handleSave = async () => {
    if (addAnswer && addQuestion) {
      setQuestions((prevQuestions) => {
        const updatedQuestions = [
          ...prevQuestions,
          { question: addQuestion, answer: addAnswer },
        ];
        updateHero({ type: "FAQ", faq: updatedQuestions });
        refetch();
        return updatedQuestions;
      });
    }
    setAddFaq(false);
    setAddAnswer("");
    setAddQuestion("");
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("FAQ update successful");
    }
    if (error) {
      if ("data" in error) {
        const err = error as any;
        toast.error(err.data.message);
      }
    }
  }, [isSuccess, error]);

  return (
    <div className="w-[70%] lg:w-[40%] mx-auto pt-20 text-white bg-[#080826] h-screen ">
      <Toaster />
      {questions?.map((faq: any, index: number) => (
        <div key={index} className="">
          <div className="">
            <div
              onClick={() => toggleAnswerVisibility(index)}
              className="flex items-center justify-between cursor-pointer gap-1"
            >
              <h1>{faq.question}</h1>
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
                <p>{faq.answer}</p>
              </div>
            )}
            <p className="w-full bg-white h-[0.5px] mt-2 mb-2"></p>
          </div>
        </div>
      ))}
      {addFaq && (
        <div className="flex flex-col">
          <input
            className="mt-1 mb-1 bg-[#131237] bg-opacity-30 p-1 rounded-sm"
            type="text"
            placeholder="Enter Question"
            onChange={(e) => setAddQuestion(e.target.value)}
          />
          <input
            className="bg-[#131237] bg-opacity-30 p-1 rounded-sm"
            type="text"
            placeholder="Enter Answer"
            onChange={(e) => setAddAnswer(e.target.value)}
          />
        </div>
      )}
      <h1 className="mt-2 cursor-pointer">
        <IoIosAddCircleOutline onClick={handleAdd} />
      </h1>
      <button
        disabled={addAnswer === "" || addQuestion === ""}
        className="text-[#E8AAFF] border border-blue-700 rounded mt-2 px-4 hover:bg-[#7D58EB] duration-500 font-Poppins font-semibold"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default FaqUi;
