import React from "react";
import "./style.css";
export const H1 = (props) => {
  const { children, className } = props;
  return <h1 className={`h1 ${className}`}>{children}</h1>;
};
export const Subtitle = ({ children }) => {
  return <span className="subtitle">{children}</span>;
};
export const P = (props) => {
  const { children, className } = props;
  return <p className={`para ${className}`}>{children}</p>;
};
