import React from "react";

export default function Title({ children }) {
  return (
    <h1 className="text-xl dark:text-white text-secondary font-semibold text-center">
      {children}
    </h1>
  );
}
