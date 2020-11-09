import React from "react";
export default function Checkbox(props) {
  const { name, Texlabel, type, className, value } = props;
  return (
    <div>
      <input
        name={name}
        id={name}
        type={type}
        className={className}
        value={value}
      />
      <label htmlFor={name} className="label-txt">
        {Texlabel}
      </label>
    </div>
  );
}
