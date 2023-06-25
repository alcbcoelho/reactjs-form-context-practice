import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import ContactContext from "../contexts/ContactContext";

import InputError from "./InputError";

export default function NewContactForm() {
    const navigate = useNavigate();
  const form = useForm();
  const { register, handleSubmit, formState: { errors } } = form;

  const { addContact } = useContext(ContactContext);

  const onSubmit = (data) => {
    console.log(data);
    addContact(data);
    navigate("/contacts");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" {...register("name", {
            required: {
                value: true,
                message: "Name is required!"
            }
        })} />
      </div>
      <InputError>{errors.name?.message}</InputError>

      <div>
        <label htmlFor="phone">Phone number: </label>
        <input type="tel" id="phone" {...register("phone", {
            required: {
                value: true,
                message: "Phone number is required!"
            },
            pattern: {
                value: /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/,
                message: "Invalid phone number format!"
            }
        })}/>
      </div>
      <InputError>{errors.phone?.message}</InputError>

      <button>Add</button>
    </form>
  );
}
