import React from "react";
import "./style.css";
export default function Button(prpos) {
  const { type, className, children } = prpos;
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}
