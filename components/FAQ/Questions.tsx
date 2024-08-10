import Question from "./Question";

import { FAQData } from "@/data";
export default function Questions() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:my-10 lg:my-20 gap-6">
        {FAQData.map((Ques) => (
          <Question key={Ques.id} id={Ques.id} title={Ques.title} />
        ))}
      </div>
    </div>
  );
}
