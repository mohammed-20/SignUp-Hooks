import React from "react";
import "./style.css";
export default function Button(prpos) {
  const { name, type, className, children } = prpos;
  return (
    <button name={name} type={type} className={className}>
      {children}
    </button>
  );
}
