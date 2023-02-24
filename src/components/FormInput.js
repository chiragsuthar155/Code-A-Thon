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
        <div className="flex flex-row items-center justify-evenly">
          {props.type === "checkbox"
            ? props.checkboxValues.map((item) => (
                <div className="flex flex-row items-center w-full my-5">
                  <p className="w-full ml-10 ">{item}</p>
                  <input
                    type="checkbox"
                    className={props.class}
                    name={props.class}
                  />
                </div>
              ))
            : ""}
        </div>
        <span className="error">{errorMessage}</span>
      </div>
    </>
  );
};
