import { ArrowUpRight } from "lucide-react";

const starterQuestions = [
  "Difference between AI search and general Search engines?",
  "What is Cognitiev PRO?",
  "What is dr.cognitiev.com?",
  "What is Cognitiev PRO?",
  "What about atul.cognitiev.com?",
  "Tussle between openai and scarlett johansson?",
  "How is groq different?",
  "iPhone 16 Review",
  "What happened to ilya?",
];

export const StarterQuestionsList = ({
  handleSend,
}: {
  handleSend: (question: string) => void;
}) => {
  return (
    <ul className="flex flex-col space-y-1 pt-2">
      {starterQuestions.map((question) => (
        <li key={question} className="flex items-center space-x-2">
          <ArrowUpRight size={18} className="text-tint" />
          <button
            onClick={() => handleSend(question)}
            className="font-medium hover:underline decoration-tint underline-offset-4 transition-all duration-200 ease-in-out transform hover:scale-[1.02] text-left break-words normal-case"
          >
            {question}
          </button>
        </li>
      ))}
    </ul>
  );
};
