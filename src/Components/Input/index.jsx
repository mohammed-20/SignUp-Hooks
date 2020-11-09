import React from "react";
import "./style.css";
export default function Input(props) {
  const { name, Texlabel, type, placeholder, value } = props;
  return (
    <div className="input-group">
      <label htmlFor={name} className="label-txt">
        {Texlabel}
      </label>
      <input
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        className="input"
        value={value}
      />
    </div>
  );
}
