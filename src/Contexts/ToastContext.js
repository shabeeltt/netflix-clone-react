import { createContext, useContext, useState } from "react";
import Toast from "../Components/Toast/Toast";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const showToast = ({ message, type = "success" }) => {
    // Assign a unique ID to force re-render and reset timer
    setToast({
      id: Date.now(), // ensures a unique key
      message,
      type,
    });
  };

  const hideToast = () => {
    setToast(null);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <Toast
          key={toast.id}
          type={toast.type}
          message={toast.message}
          onClose={hideToast}
        />
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
