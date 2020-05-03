import React from "react";

const ErrorMessage = ({ message }) => {
  if (message) return <div>{message}</div>;
  else {
    return (
      <div>
        Failed to load. Please check your internet connection and try again
      </div>
    );
  }
};

export default ErrorMessage;
