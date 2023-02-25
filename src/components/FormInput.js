import React, { useState } from "react";

export const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  const handleChange = (e) => {
    setIsChecked(false);
  };
  console.log(props);
  return (
    <>
      <div className="formInput">
        <label>{label}</label>
        {props.type !== "checkbox" ? (
          <input
            className="input"
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            onFocus={() =>
              inputProps.name === "confirmPassword" && setFocused(true)
            }
            focused={focused.toString()}
          />
        ) : (
          ""
        )}
        <span className="error">{errorMessage}</span>
      </div>
    </>
  );
};
