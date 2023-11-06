import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { useState, MouseEvent } from "react";
const PreAssessment = () => {
  const [survey, setSurvey] = useState<SurveyQuestion[]>([
    {
      questionType: "multipleChoice",
      question: "What kind of therapy experience are you looking for?",
      answers: ["One-on-one", "Couples", "Families", "Teens/ Adolescents"],
      databaseAlias: "TherapyType",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "Have you been to therapy before?",
      answers: ["Yes", "No"],
      databaseAlias: "PreviousTherapy",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "Preferred method of communication?",
      answers: [
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
      answers: [
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
      answers: ["Yes", "No"],
      databaseAlias: "Depression",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "When did you last think about suicide?",
      answers: [
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
      answers: ["Yes", "No"],
      databaseAlias: "Religious",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "Do you consider yourself spiritual?",
      answers: ["Yes", "No"],
      databaseAlias: "Spiritual",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "What Gender do you identify with?",
      answers: [
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
      answers: [
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
      answers: [
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
      answers: ["Excellent", "Good", "Fair", "Poor"],
      databaseAlias: "PhysicalHealth",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "How would you rate your eating habits?",
      answers: ["Excellent", "Good", "Fair", "Poor"],
      databaseAlias: "EatingHabits",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "How often do you drink alcohol?",
      answers: ["Never", "Infrequently", "Monthly", "Weekly", "Daily"],
      databaseAlias: "Alcohol",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "Do you take any current medication?",
      answers: ["Yes", "No"],
      databaseAlias: "Medication",
      answer: null,
    },
    {
      questionType: "multipleChoice",
      question: "How would you rate your sleeping habits?",
      answers: ["Excellent", "Good", "Fair", "Poor"],
      databaseAlias: "SleepingHabits",
      answer: null,
    },
    {
      questionType: "informative",
      question: "Why are you considering therapy today?",
      answers: [
        "I have been feeling depressed",
        "I have been feeling anxious or overwhelmed",
        "My mood has been interfering with my life",
        "Poor",
      ],
      databaseAlias: "Stress",
      answer: null,
    },
  ]);
  const [offset, setOffset] = useState(0);
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
          {offset < survey.length &&
            survey.slice(offset, offset + 4).map((question, questionIndex) => (
              <div
                key={questionIndex}
                className="text-center relative mt-8 border-[5px] rounded-xl border-secondary-green mx-auto h-fit"
              >
                <h2 className="text-2xl font-semibold mt-4">
                  {question.question}
                </h2>
                <div className="flex questions-center my-4">
                  {question.questionType === "multipleChoice" ? (
                    <div className="flex flex-col w-full mx-auto">
                      {question.answers.map((answer, answerIndex) => (
                        <div
                          className="flex questions-center"
                          key={answerIndex}
                        >
                          <button
                            name={question.databaseAlias}
                            value={answer}
                            onClick={(e: MouseEvent<HTMLButtonElement>) => {
                              const newSurvey = [...survey];
                              newSurvey[offset + questionIndex].answer =
                                e.currentTarget.value;
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
                  ) : (
                    <input
                      type="text"
                      name={question.databaseAlias}
                      onChange={(e) => {
                        const newSurvey = [...survey];
                        newSurvey[offset + questionIndex].answer =
                          e.target.value;
                        setSurvey(newSurvey);
                      }}
                      key={questionIndex}
                    />
                  )}
                </div>
              </div>
            ))}
        </div>
        {offset > 0 && (
          <>
            <br />
            <button
              className="bg-secondary-green rounded-xl w-3/5 mx-auto h-fit text-2xl p-4 mb-4 md:w-2/5 lg:w-1/5 hover:bg-primary-white hover:text-[#23655A]"
              onClick={() => {
                if (offset === 0) {
                  return;
                }
                setOffset(offset - 4);
                window.scrollTo(0, 0);
              }}
            >
              Previous
            </button>
          </>
        )}
        {offset < survey.length - 4 && (
          <>
            <br />
            <button
              className="bg-secondary-green rounded-xl w-3/5 mx-auto h-fit text-2xl p-4 mb-4 md:w-2/5 lg:w-1/5 hover:bg-primary-white hover:text-[#23655A]"
              onClick={() => {
                setOffset(offset + 4);
                window.scrollTo(0, 0);
              }}
            >
              Next
            </button>
          </>
        )}
        {offset == survey.length - 4 && (
          <>
            <br />
            <button
              className="bg-secondary-green rounded-xl w-3/5 mx-auto h-fit text-2xl p-4 mb-4 md:w-2/5 lg:w-1/5 hover:bg-primary-white hover:text-[#23655A]"
              onClick={() => {}}
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
  answers: string[];
  databaseAlias: string;
  answer: string | null;
}

export default PreAssessment;
