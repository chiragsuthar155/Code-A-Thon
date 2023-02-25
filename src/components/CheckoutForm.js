import React, { useState } from "react";
import { FormInput } from "./FormInput";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const CheckoutForm = ({ setFormData }) => {
  const items = useSelector((store) => store.cart);
  const [values, setValues] = useState({
    email: "",
  });

  const inputs = [
    {
      id: 1,
      name: "contactno",
      type: "tel",
      placeholder: "Phone-Number",
      errorMessage:
        "Phone-Number should be 0-9 characters and shouldn't include any special character!",
      label: "contactno",
      pattern: "^[0-9]{0,9}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "ship_date",
      type: "date",
      placeholder: "Shipping Date",
      label: "ship_date",
    },
    {
      id: 4,
      name: "Category",
      type: "text",
      placeholder: "Economy, Priority, Intermediate",
      label: "Cateogry",
      required: true,
    },
    {
      id: 5,
      name: "Ship_mode",
      type: "text",
      placeholder: "Government, Charity, Private",
      label: "Ship_mode",
      required: true,
    },

    {
      id: 6,
      name: "state",
      type: "text",
      placeholder: "State",
      label: "state",
      required: true,
    },
    {
      id: 7,
      name: "City",
      type: "text",
      placeholder: "City",
      label: "City",
      required: true,
    },
    {
      id: 8,
      name: "pincode",
      type: "Number",
      placeholder: "Pin Code",
      label: "pincode",
      required: true,
    },
    {
      id: 9,
      name: "blood_Type",
      type: "text",
      placeholder: "Blood Group",
      label: "blood_Type",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="app bg-red-400 ">
        <form className="py-4" onSubmit={handleSubmit}>
          <h1 className="text-4xl font-semibold mb-10 text-center">
            Checkout Form
          </h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <div className="">
            <h1 className="text-2xl font-semibold">Order Summary: </h1>
            <p className="flex flex-row items-center justify-between">
              <p className="text-xl">Items:</p> {items.length}
            </p>
            <p className=" flex flex-row items-center justify-between">
              <p className="text-xl">Delivery:</p> {"--"}
            </p>
            <p className="flex flex-row items-center justify-between">
              <p className="text-xl">Order Total: </p>
              <p className="text-xl">₹818.00</p>
            </p>
          </div>
          <Link to="/order-complete">
            <button
              className="submit bg-red-500"
              type="submit"
              onClick={(e) => {
                setFormData(values);
              }}
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};
