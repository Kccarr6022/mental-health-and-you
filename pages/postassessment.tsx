import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { useState, MouseEvent, ChangeEvent } from "react";
import { useRouter } from "next/router";

const PreAssessment = () => {
  const router = useRouter();
  const [survey, setSurvey] = useState<SurveyQuestion[]>([
    {
      questionType: "multipleChoice",
      question: "Little interest or pleasure in doing things?",
      options: [
        "Not at all",
        "Several days",
        "More than half the days",
        "Nearly every day",
      ],
      databaseAlias: "activityInterest",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question:
        "Thoughts that you would be better off dead or of hurting yourself in some way",
      options: [
        "Not at all",
        "Several days",
        "More than half the days",
        "Nearly every day",
      ],
      databaseAlias: "suicidalThoughtsTwo",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question:
        "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
      options: [
        "Not at all",
        "Several days",
        "More than half the days",
        "Nearly every day",
      ],
      databaseAlias: "feelingBad",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question:
        "Trouble concentrating on things, such as reading or watching television",
      options: [
        "Not at all",
        "Several days",
        "More than half the days",
        "Nearly every day",
      ],
      databaseAlias: "troubleConcentrating",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "Poor appetite or overeating",
      options: [
        "Not at all",
        "Several days",
        "More than half the days",
        "Nearly every day",
      ],
      databaseAlias: "appetite",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "Feeling tired or having little energy",
      options: [
        "Not at all",
        "Several days",
        "More than half the days",
        "Nearly every day",
      ],
      databaseAlias: "tired",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question:
        "How difficult have these problems made it for you in your work and social life?",
      options: [
        "Not difficult at all",
        "Somewhat difficult",
        "Very difficult",
        "Extremely difficult",
      ],
      databaseAlias: "difficulty",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "Do you worry about intimacy?",
      options: ["Yes", "No"],
      databaseAlias: "intimacy",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question:
        "Are you currently experiencing anxiety, panic attacks, or any phobias?",
      options: ["Yes", "No"],
      databaseAlias: "anxiety",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "Are you currently experiencing chronic pain?",
      options: ["Yes", "No"],
      databaseAlias: "chronicPain",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "How is your current financial situation?",
      options: ["Excellent", "Good", "Fair", "Poor"],
      databaseAlias: "financialSituation",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "Are you currently employed?",
      options: ["Yes", "No"],
      databaseAlias: "employed",
      answer: null,
    },
  ]);
  const [questionOffset, setQuestionOffset] = useState(0);
  const questionsPerPage = 4;
  return (
    <>
      <Navbar />
      <div className="bg-primary-green text-primary-white w-full text-center min-h-[calc(100vh-80px)] h-fit pb-4">
        <h1 className="pt-10 pb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold w-[75%] mx-auto">
          Post Assessment
        </h1>
        <div className="relative">
          <div className="circle-left w-4 h-4 md:w-8 md:h-8 lg:h-12 lg:w-12 bg-[#5EC7B6] absolute top-1/2 transform -translate-y-1/2 left-[10%] rounded-full"></div>
          <hr className="border-2 md:border-4 lg:border-8 border-[#5EC7B6] w-[80%] mx-auto" />
          <div className="circle-right w-4 h-4 md:w-8 md:h-8 lg:h-12 lg:w-12 bg-[#5EC7B6] absolute top-1/2 transform -translate-y-1/2 right-[10%] rounded-full"></div>
        </div>
        <div className="w-4/5 mx-auto mt-10 md:w-3/5 lg:w-2/5">
          {questionOffset < survey.length &&
            survey
              .slice(questionOffset, questionOffset + questionsPerPage)
              .map((question, questionIndex) => (
                <div
                  key={questionIndex}
                  className="text-center relative mt-8 border-[5px] rounded-xl border-secondary-green mx-auto h-fit"
                >
                  <h2 className="text-2xl font-semibold mt-4 mx-4">
                    {question.question}
                  </h2>
                  <div className="flex questions-center my-4">
                    {question.questionType === "multipleChoice" && (
                      <div className="flex flex-col w-full mx-auto">
                        {question.options.map((answer, answerIndex) => (
                          <div
                            className="flex questions-center"
                            key={answerIndex}
                          >
                            <button
                              name={question.databaseAlias}
                              value={answer}
                              onClick={(e: MouseEvent<HTMLButtonElement>) => {
                                const newSurvey = [...survey];
                                newSurvey[
                                  questionOffset + questionIndex
                                ].answer = e.currentTarget.value;
                                setSurvey(newSurvey);
                              }}
                              style={
                                question.answer === answer
                                  ? {
                                      backgroundColor: "#F0F0F0",
                                      color: "#23655A",
                                    }
                                  : {}
                              }
                              className="bg-secondary-green rounded-xl w-3/4 mx-auto my-2 p-2 text-2xl hover:bg-primary-white hover:text-[#23655A]"
                            >
                              {answer}
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                    {question.questionType == "informative" && (
                      <div key={questionIndex} className="w-5/6 mx-auto">
                        <ul className="text-left text-xl leading-5 mx-auto w-full space-y-2">
                          {question.options.map((answer, answerIndex) => (
                            <li className="flex items-center" key={answerIndex}>
                              <input
                                id={answer}
                                className="w-8 h-8 bg-primary-white border-2 border-secondary-green rounded-xl flex-grow-0 flex-shrink-0"
                                type="checkbox"
                                value={answer}
                                name={question.databaseAlias}
                                key={answerIndex}
                                onChange={(
                                  e: ChangeEvent<HTMLInputElement>
                                ) => {
                                  const newSurvey = [...survey];
                                  let answers: string[] = newSurvey[
                                    questionOffset + questionIndex
                                  ].answer as string[];

                                  if (e.target.checked) {
                                    answers.push(e.target.value);
                                  }
                                  if (!e.target.checked) {
                                    answers = answers.filter(
                                      (answer) => answer !== e.target.value
                                    );
                                  }
                                  newSurvey[
                                    questionOffset + questionIndex
                                  ].answer = answers;
                                  setSurvey(newSurvey);
                                }}
                                checked={
                                  (question.answer &&
                                    question.answer.includes(answer)) ||
                                  false
                                }
                              />
                              <label
                                htmlFor={answer}
                                className="flex-grow ml-2"
                              >
                                {answer}
                              </label>
                            </li>
                          ))}
                        </ul>
                        <textarea
                          className="w-full mx-auto h-[450px] rounded-xl border-2 border-secondary-green p-4 text-base my-4 over text-primary-green focus:outline-none focus:ring-2 focus:ring-secondary-green focus:border-transparent"
                          placeholder="Please elaborate on your answer here (optional)."
                          name={question.databaseAlias}
                          onChange={(e) => {
                            const newSurvey = [...survey];
                            let answers: string[] = newSurvey[
                              questionOffset + questionIndex
                            ].answer as string[];

                            answers.push(e.target.value);
                            newSurvey[questionOffset + questionIndex].answer =
                              answers;
                            setSurvey(newSurvey);
                          }}
                          key={questionIndex}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
        </div>
        {questionOffset > 0 && (
          <>
            <br />
            <button
              className="bg-secondary-green rounded-xl w-3/5 mx-auto h-fit text-2xl p-4 mb-4 md:w-2/5 lg:w-1/5 hover:bg-primary-white hover:text-[#23655A]"
              onClick={() => {
                if (questionOffset === 0) {
                  return;
                }
                setQuestionOffset(questionOffset - questionsPerPage);
                window.scrollTo(0, 0);
              }}
            >
              Previous
            </button>
          </>
        )}
        {questionOffset < survey.length - questionsPerPage && (
          <>
            <br />
            <button
              className="bg-secondary-green rounded-xl w-3/5 mx-auto h-fit text-2xl p-4 mb-4 md:w-2/5 lg:w-1/5 hover:bg-primary-white hover:text-[#23655A]"
              onClick={() => {
                setQuestionOffset(questionOffset + questionsPerPage);
                window.scrollTo(0, 0);
              }}
            >
              Next
            </button>
          </>
        )}
        {survey.length - questionOffset === questionsPerPage && (
          <>
            <br />
            <button
              className="bg-secondary-green rounded-xl w-3/5 mx-auto h-fit text-2xl p-4 mb-4 md:w-2/5 lg:w-1/5 hover:bg-primary-white hover:text-[#23655A]"
              onClick={() => {
                let completedAnswers = 0;
                survey.forEach((question) => {
                  if (question.answer) {
                    completedAnswers++;
                  }
                });
                if (completedAnswers === survey.length) {
                  console.log("Survey complete");
                  // TODO: Send survey to next page
                  router.push("/signup");
                } else {
                  console.log(survey);
                  console.log("Survey incomplete");
                  alert("Please answer all questions before continuing.");
                }
              }}
            >
              Submit
            </button>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

interface SurveyQuestion {
  questionType: string;
  question: string;
  options: string[];
  databaseAlias: string;
  answer: string | string[] | null;
}

export default PreAssessment;
