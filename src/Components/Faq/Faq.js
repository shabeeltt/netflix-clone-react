import React from "react";
import "./Faq.scss";
import Accordion from "../Accordion/Accordion";
import { AccordionData } from "../../Constants/AccordionData";

function Faq() {
  return (
    <div className="container">
      <div className="faq-section">
        <h3>Frequently Asked Questions</h3>
        <Accordion accordionData={AccordionData} />
      </div>
    </div>
  );
}

export default Faq;
