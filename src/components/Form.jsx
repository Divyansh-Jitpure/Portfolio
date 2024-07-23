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
        },
      );

    closeDia();
    form.current.reset();
  };

  return (
    <div className="px-16 py-10">
      <form ref={form} onSubmit={sendEmail}>
        <h2 className="title-font mb-1 text-lg font-medium text-white">
          Contact Me
        </h2>
        <div className="relative mb-4 text-left">
          <label htmlFor="name" className="text-sm leading-7 text-white">
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            placeholder="Name"
            className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-cyan-300"
            // {...register("name")}
            required
          />
        </div>
        <div className="relative mb-4 text-left">
          <label htmlFor="email" className="text-sm leading-7 text-white">
            Email
          </label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            placeholder="Email"
            className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-cyan-300"
            // {...register("email")}
            required
          />
        </div>
        <div className="relative mb-4 text-left">
          <label htmlFor="message" className="text-sm leading-7 text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message"
            className="h-32 w-full resize-none rounded border border-gray-300 bg-white px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-cyan-300"
            // {...register("message")}
            required
          />
        </div>

        <input
          type="submit"
          className="rounded-lg border-b-[1px] border-b-cyan-300 px-6 py-2 text-lg text-white transition hover:bg-slate-500/20 hover:text-cyan-400 focus:outline-none"
        />
      </form>
    </div>
  );
};

export default Form;
