import React from "react";
import "./style.css";
export default function Input(props) {
  const {
    name,
    Texlabel,
    type,
    placeholder,
    value,
    handleChange,
    error,
  } = props;
  return (
    <div className={`input-group ${error && "error1"}`}>
      <div className="inp-leb">
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
          onChange={handleChange}
        />
      </div>
      {error && <span className="error">{error}</span>}
    </div>
  );
}
