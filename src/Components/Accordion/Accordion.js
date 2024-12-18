import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";

const Accordion = ({ accordionData }) => {
  const [selectedQuestion, setSelectedQuestion] = useState([]);

  // Toggles the selected state of a question in the FAQ accordion.
  // If the question is already selected, it will be removed from the state; otherwise, it will be added.
  // @param {number} newId - The ID of the clicked question.
  // @return {Array} Updated state with the selected question toggled.
  const showQuestion = (newId) => {
    setSelectedQuestion((prevState) => {
      return [...prevState].includes(newId)
        ? [...prevState].filter((id) => id !== newId)
        : [...prevState, newId];
    });
  };

  return (
    <div>
      {accordionData?.map(({ id, question, answer }) => (
        <div key={id} className="faq-wrapper">
          <div
            className="faq-section__question"
            onClick={() => showQuestion(id)}
          >
            <h4>{question}</h4>
            {selectedQuestion.includes(id) ? (
              <FontAwesomeIcon
                className="faq-section__question-icon"
                icon={faXmark}
                style={{ color: "white" }}
              />
            ) : (
              <FontAwesomeIcon
                className="faq-section__question-icon"
                icon={faPlus}
                style={{ color: "white" }}
              />
            )}
          </div>
          {selectedQuestion?.map((question_id, index) => {
            return (
              id === question_id && (
                <h4 key={index} className="faq-answer">
                  {answer}
                </h4>
              )
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
