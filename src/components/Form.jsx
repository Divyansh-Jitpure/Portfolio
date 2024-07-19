import React, { useRef } from "react";
// import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Form = ({ closeDia, emailToast }) => {
  // const { register, handleSubmit } = useForm();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0sxo7wa", "template_39r74ml", form.current, {
        publicKey: "u-wP14KWxXsJ5uehj",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          emailToast();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    closeDia();
    form.current.reset();
  };

  return (
    <div className="py-10 px-16 ">
      <form ref={form} onSubmit={sendEmail}>
        <h2 className="text-white text-lg mb-1 font-medium title-font">
          Contact Me
        </h2>
        <div className="relative mb-4 text-left">
          <label htmlFor="name" className="leading-7 text-sm text-white">
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            placeholder="Name"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-cyan-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            // {...register("name")}
            required
          />
        </div>
        <div className="relative mb-4 text-left">
          <label htmlFor="email" className="leading-7 text-sm text-white">
            Email
          </label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            placeholder="Email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-cyan-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            // {...register("email")}
            required
          />
        </div>
        <div className="relative mb-4 text-left">
          <label htmlFor="message" className="leading-7 text-sm text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-cyan-300 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            // {...register("message")}
            required
          />
        </div>

        <input
          type="submit"
          className="text-white transition border-b-[1px] border-b-cyan-300 py-2 px-6 focus:outline-none hover:bg-slate-500/20 hover:text-cyan-400 rounded-lg text-lg "
        />
      </form>
    </div>
  );
};

export default Form;
