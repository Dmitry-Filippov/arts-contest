import { useState } from "react";
import "./FaqItem.scss";

type props = {
  question: string;
  answer: string;
};

const FaqItem = ({ question, answer }: props) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <li className="faq__question">
      <div className="faq__question-wrapper">
        <p>{question}</p>
        <button
          onClick={() => {
            setIsClicked(!isClicked);
          }}
          className={`faq__button ${isClicked ? "faq__button_clicked" : ""}`}
        ></button>
      </div>
      <p className={`faq__answer ${isClicked ? "faq__answer_visible" : ""}`}>
        {answer}
      </p>
    </li>
  );
};

export default FaqItem;
