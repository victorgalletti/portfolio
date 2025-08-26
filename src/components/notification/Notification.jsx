import React from "react";
import "./notification.css";

const Notification = ({
  isVisible,
  onClose,
  type = "success",
  title,
  message,
}) => {
  if (!isVisible) return null;

  const getIcon = () => {
    if (type === "success") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="notification__icon notification__icon--success"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    } else if (type === "error") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="notification__icon notification__icon--error"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
      );
    }
    return null;
  };

  return (
    <div
      role="alert"
      className={`notification ${isVisible ? "notification--visible" : ""}`}
    >
      <div className="notification__content">
        {getIcon()}

        <div className="notification__text">
          <strong className="notification__title">{title}</strong>

          <p className="notification__message">{message}</p>
        </div>

        <button
          className="notification__close"
          type="button"
          aria-label="Dismiss alert"
          onClick={onClose}
        >
          <span className="sr-only">Dismiss popup</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="notification__close-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Notification;
