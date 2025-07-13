import "./Toast.scss";
import { useEffect, useState } from "react";

const Toast = ({ type = "success", message, onClose }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
      setTimeout(() => {
        onClose();
      }, 400);
    }, 8000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleClose = () => {
    setHide(true);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  return (
    <div className={`toast ${type} ${hide ? "hide" : ""}`}>
      <span className="toast__type">{type === "error" ? "Error" : ""}</span>
      <span className="toast__message">{message}</span>
      <button className="toast__close-btn" onClick={handleClose}>
        &times;
      </button>
    </div>
  );
};

export default Toast;
