import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import Link from "next/link";
import { useState, MouseEvent, ChangeEvent } from "react";
import { useRouter } from "next/router";
const PreAssessment = () => {
  const router = useRouter();
  const [survey, setSurvey] = useState<SurveyQuestion[]>([
    {
      questionType: "multipleChoice",
      question: "What kind of therapy experience are you looking for?",
      options: ["One-on-one", "Couples", "Families", "Teens/ Adolescents"],
      databaseAlias: "TherapyType",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "Have you been to therapy before?",
      options: ["Yes", "No"],
      databaseAlias: "PreviousTherapy",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "Preferred method of communication?",
      options: [
        "Direct Messaging",
        "Phone or Video Sessions",
        "Not sure yet",
        "Both are good",
      ],
      databaseAlias: "PreferredCommunication",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "Preferred gender of Therapist?",
      options: [
        "No Preference",
        "Male",
        "Female",
        "Non-binary",
        "Transfeminine",
        "Transmasculine",
        "Agender",
      ],
      databaseAlias: "TherapistGender",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "Are you experiencing depression?",
      options: ["Yes", "No"],
      databaseAlias: "Depression",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "When did you last think about suicide?",
      options: [
        "In the last 2 weeks",
        "Over 2 weeks ago",
        "Over a month ago",
        "Over 3 months ago",
        "Over a year ago",
        "Never",
      ],
      databaseAlias: "SuicidalThoughts",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "Do you consider yourself religious?",
      options: ["Yes", "No"],
      databaseAlias: "Religious",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "Do you consider yourself spiritual?",
      options: ["Yes", "No"],
      databaseAlias: "Spiritual",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "What Gender do you identify with?",
      options: [
        "Male",
        "Female",
        "Non-binary",
        "Transfeminine",
        "Transmasculine",
        "Agender",
        "I do not know",
        "Prefer not to say",
        "Other",
      ],
      databaseAlias: "GenderIdentity",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "What Sexuality do you identify with?",
      options: [
        "Straight",
        "Gay",
        "Lesbian",
        "Bi/Pan",
        "Queer",
        "Asexual",
        "Questioning",
        "I do not know",
        "Prefer not to say",
        "Other",
      ],
      databaseAlias: "Sexuality",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "What is your relationship status?",
      options: [
        "Single",
        "In a Relationship",
        "Married",
        "Divorced",
        "Widowed",
        "Other",
      ],
      databaseAlias: "RelationshipStatus",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "How would you rate your physical health?",
      options: ["Excellent", "Good", "Fair", "Poor"],
      databaseAlias: "PhysicalHealth",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "How would you rate your eating habits?",
      options: ["Excellent", "Good", "Fair", "Poor"],
      databaseAlias: "EatingHabits",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "How often do you drink alcohol?",
      options: ["Never", "Infrequently", "Monthly", "Weekly", "Daily"],
      databaseAlias: "Alcohol",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "Do you take any current medication?",
      options: ["Yes", "No"],
      databaseAlias: "Medication",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "How would you rate your sleeping habits?",
      options: ["Excellent", "Good", "Fair", "Poor"],
      databaseAlias: "SleepingHabits",
      answer: null,
    },
    {
      questionType: "informative",
      question: "Why are you considering therapy today?",
      options: [
        "I have been feeling depressed",
        "I have been feeling anxious or overwhelmed",
        "My mood has been interfering with my life",
        "I have been struggling with relationships",
        "I cannot find purpose and meaning in my life",
        "I have been grieving",
        "I have experienced trauma",
        "I need to talk through an event in my life",
        "I want to become more self confident",
        "I seek to improve myself but do not know where to begin",
        "I was recommended to seek therapy (friend, family member, or doctor)",
        "Just exploring options",
        "Other",
      ],
      databaseAlias: "ReasonForTherapy",
      answer: [],
    },
    {
      questionType: "informative",
      question: "What are you expecting out of your therapist?",
      options: [
        "I expect them to listen",
        "I want them to explore my past",
        "I want to be taught new skills",
        "I want them to challenge my beliefs",
        "I expect to be assigned homework",
        "I want them to guide me to set goals",
        "I expect them to proactively check on me",
        "I do no know what to expect",
        "I have other expectations",
      ],
      databaseAlias: "TherapistExpectations",
      answer: [],
    },
    {
      questionType: "multipleChoice",
      question: "How did you find out about Mental Health and You?",
      options: [
        "TV",
        "Social Media",
        "YouTube",
        "Friend or Family",
        "Web search",
        "Email",
        "Magzine/Newspaper",
      ],
      databaseAlias: "SleepingHabits",
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
          Pre Assessment
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
                  <h2 className="mx-4 mt-4 text-2xl font-semibold">
                    {question.question}
                  </h2>
                  <div className="flex my-4 questions-center">
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
                        <ul className="w-full mx-auto space-y-2 text-xl leading-5 text-left">
                          {question.options.map((answer, answerIndex) => (
                            <li className="flex items-center" key={answerIndex}>
                              <input
                                id={answer}
                                className="flex-grow-0 flex-shrink-0 w-8 h-8 border-2 bg-primary-white border-secondary-green rounded-xl"
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
        {survey.length - questionOffset < questionsPerPage && (
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
