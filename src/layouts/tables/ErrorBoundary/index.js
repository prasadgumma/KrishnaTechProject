import React, { useState } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = (error, errorInfo) => {
    console.log("Caught error:", error, errorInfo);
    setHasError(true);
  };

  // You can simulate the `componentDidCatch` lifecycle method using `ErrorBoundary` component's logic inside a try-catch block
  try {
    if (hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return children;
  } catch (error) {
    handleError(error, "Error Info");
    return <h1>Something went wrong.</h1>;
  }
};

export default ErrorBoundary;
