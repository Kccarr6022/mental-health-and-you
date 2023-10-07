import NavBar from "../components/NavBar.js";

export default function PreAssessment() {
  let val = [
    {
      id: 1,
      question: "What is your name?",
      options: { A: "Kaden", B: "Mateo", C: "Test", D: "name" },
    },
  ];

  return (
    <section className="bg-primary-green font-lexend text-[#FFFF]">
      <NavBar />
      <div className="h-screen">
        <h1 className="text-center mt-[10vh] font-black text-5xl">
          Pre-Assessment
        </h1>
      </div>
    </section>
  );
}
