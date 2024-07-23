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
        className="m-auto rounded-lg bg-[#1d2433] text-center backdrop:bg-black/40"
        ref={diaRef}
      >
        <button className="absolute right-0 top-0 m-4" onClick={closeDia}>
          <RiCloseLargeFill className="m-2 text-xl text-white" />
        </button>
        <Form closeDia={closeDia} emailToast={emailToast} />
      </dialog>

      <p>
        🌐 Let's connect! I'm always open to networking, collaborating on
        exciting projects, and engaging in conversations about the ever-evolving
        landscape of web development and IT industry.
      </p>

      <div className="my-4 text-center">
        <button
          onClick={openDia}
          className="rounded-lg border-b-[1px] border-b-cyan-300 px-6 py-2 text-lg text-white transition hover:bg-slate-500/20 hover:text-cyan-400 focus:outline-none"
        >
          Contact Me
        </button>
      </div>

      <Toaster richColors />
    </section>
  );
};

export default Contact;
