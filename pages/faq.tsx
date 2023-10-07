import Navbar from "@/components/NavBar";
import { BiRightArrow, BiDownArrow } from "react-icons/bi";
import { useState } from "react";
import exp from "constants";
import Footer from "@/components/Footer";

const FAQ = () => {
  const [faq, setFaq] = useState([
    {
      question: "What is Mental Health and You?",
      answer:
        "Mental Health and You is a 100% online therapy platform, with available therapists specializing in trauma, substance abuse, anxiety, depression, and more.\n\nMental Health and You may just be what you are looking for to help improve your quality of life. Our goal is to provide users with a better outlook on issues life may bring their way, with licensed and flexible mental health counselors to help you do it.",
      expand: false,
    },
    {
      question: "How will I talk with my therapist?",
      answer:
        "You can always contact your therapist through: Texting Phone calls Video conferences You can use these different means of communication based on your preferences.",
      expand: false,
    },
    {
      question: "How much do I need to commit?",
      answer:
        "You can commit however much time you need. Your therapist will always be on standby when you feel like you are ready to talk, and you can cancel your subscription at any time.",
      expand: false,
    },
    {
      question: "Who will be my therapist?",
      answer:
        "Your therapist will be one of Mental Health and You’s licensed professionals, and will be chosen based on your therapy needs. They will be trained, experienced, and accredited psychologists with a Masters or Doctorate in their respected field. They have gone through all of the necessary licenses, exams, and educations to act as licensed therapists. However, if you are still not satisfied with your current therapist, you are able to change them at any time.",
      expand: false,
    },
    {
      question: "How much do I need to commit?",
      answer:
        "You can commit however much time you need. Your therapist will always be on standby when you feel like you are ready to talk, and you can cancel your subscription at any time.",
      expand: false,
    },
    {
      question: "How long will I be in therapy?",
      answer:
        "Time in therapy can fluctuate based on your needs. Some people may feel satisfied in a few weeks, whereas others a few months. How long you stay is completely up to you.",
      expand: false,
    },
    {
      question: "Where do I start?",
      answer:
        "You can start by clicking the profile button on the top right of the page. You will answer a short series of questions, and then begin creating your account. ",
      expand: false,
    },
    {
      question: "How much will it cost?",
      answer:
        "Mental Health and You will be a 250$ payment every month, which will grant you unlimited texting with your therapist, one monthly counseling session, and access to additional mental health resources.",
      expand: false,
    },
    {
      question: "Will my information remain confidential?",
      answer:
        "All therapists are licensed through the same necessary training and practices that in-person therapists go through. They are under the exact same confidentiality agreements as them, meaning all information you tell them will stay confidential under law unless certain circumstances arise. You can always ask your therapist to restate the rules of confidentiality when meeting with them. \n\nMental Health and You is also fully encrypted and HIPPA compliant, meaning all of our services follow security measures to ensure maximum privacy of your potentially sensitive information.",
      expand: false,
    },
  ]);

  const handleFaqExpand = (index: number) => {
    const newFaq = [...faq];
    newFaq[index].expand = !newFaq[index].expand;
    setFaq(newFaq);
  };

  return (
    <>
      <Navbar />
      <div className="bg-primary-green text-primary-white w-full text-center h-fit pb-[50vh]">
        <h1 className="pt-20 pb-10 text-4xl font-bold">
          Frequently asked questions
        </h1>
        <div className="relative">
          <div className="circle-left w-8 h-8 bg-[#5EC7B6] absolute top-1/2 transform -translate-y-1/2 left-[10%] rounded-full"></div>
          <hr className="border-4 border-[#5EC7B6] w-[80%] mx-auto" />
          <div className="circle-right w-8 h-8 bg-[#5EC7B6] absolute top-1/2 transform -translate-y-1/2 right-[10%] rounded-full"></div>
        </div>
        <div className="w-3/5 mx-auto mt-10">
          {faq.map((item, index) => (
            <div
              key={index}
              className="border-y-[1.5px] border-[#5EC7B6] text-left relative my-1"
            >
              <h2 className="text-2xl font-bold">{item.question}</h2>
              {item.expand ? (
                <>
                  <BiDownArrow
                    size={30}
                    fill="#FFFF"
                    onClick={() => handleFaqExpand(index)}
                    className="flex items-center text-primary-white absolute transform -translate-y-1/2  top-4 right-0"
                  />
                  <p className="text-lg">{item.answer}</p>
                </>
              ) : (
                <BiRightArrow
                  size={30}
                  fill="#FFFF"
                  onClick={() => handleFaqExpand(index)}
                  className="flex items-center text-primary-white absolute top-1/2 transform -translate-y-1/2 right-0"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
