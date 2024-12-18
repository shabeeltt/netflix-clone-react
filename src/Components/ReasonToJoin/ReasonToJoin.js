import React from "react";
import "./ReasonToJoin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faHandshake,
  faHeart,
  faDisplay,
} from "@fortawesome/free-solid-svg-icons";
function ReasonToJoin() {
  return (
    <div className="container">
      <h3>More reasons to join</h3>
      <div className="reason-row">
        <div className="reason-row__card">
          <h3 className="reason-row__card-title">
            Stories tailored to your taste
          </h3>
          <FontAwesomeIcon
            className="reason-row__card-icon"
            icon={faStar}
            style={{ color: "#fe2020" }}
          />
        </div>
        <div className="reason-row__card">
          <h3 className="reason-row__card-title">
            Cancel or switch plans anytime
          </h3>
          <FontAwesomeIcon
            className="reason-row__card-icon"
            icon={faHandshake}
            style={{ color: "#fe2020" }}
          />
        </div>
        <div className="reason-row__card">
          <h3 className="reason-row__card-title">A place just for kids</h3>
          <FontAwesomeIcon
            className="reason-row__card-icon"
            icon={faHeart}
            style={{ color: "#fe2020" }}
          />
        </div>
        <div className="reason-row__card">
          <h3 className="reason-row__card-title">
            For your phone, tablet, laptop and TV
          </h3>
          <FontAwesomeIcon
            className="reason-row__card-icon"
            icon={faDisplay}
            style={{ color: "#fe2020" }}
          />
        </div>
      </div>
    </div>
  );
}

export default ReasonToJoin;
