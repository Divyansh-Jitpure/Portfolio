import React, { useRef } from "react";
import Form from "../components/Form";
import { RiCloseLargeFill } from "react-icons/ri";
import { Toaster, toast } from "sonner";

const Contact = () => {
  const emailToast = () => toast.success("Email Sent!");
  const diaRef = useRef();

  const closeDia = () => {
    diaRef.current?.close();
    document.body.style.overflow = "";
  };
  const openDia = () => {
    diaRef.current?.showModal();
    document.body.style.overflow = "hidden";
    diaRef.current?.addEventListener("close", closeDia);

    return () => {
      diaRef.current?.removeEventListener("close", closeDia);
    };
  };

  return (
    <section>
      <dialog
        className="text-center m-auto bg-[#1d2433] backdrop:bg-black/40 rounded-lg"
        ref={diaRef}
      >
        <button className="absolute top-0 right-0 m-4" onClick={closeDia}>
          <RiCloseLargeFill className="text-white m-2 text-xl" />
        </button>
        <Form closeDia={closeDia} emailToast={emailToast} />
      </dialog>

      <p>
        🌐 Let's connect! I'm always open to networking, collaborating on
        exciting projects, and engaging in conversations about the ever-evolving
        landscape of web development and IT industry.
      </p>

      <div className="text-center my-4">
        <button
          onClick={openDia}
          className="text-white transition border-b-[1px] border-b-cyan-300 py-2 px-6 focus:outline-none hover:bg-slate-500/20 hover:text-cyan-400 rounded-lg text-lg "
        >
          Contact Me
        </button>
      </div>

      <Toaster richColors />
    </section>
  );
};

export default Contact;
