import React, { useEffect, useMemo, useRef, useState } from "react";
import FloatNavBar from "../../components/FloatNavbar";
import Stairs from "../../components/Layout/Stairs";
import { GlobeDemo } from "../../components/Globeres";
import { motion } from "framer-motion";
import StarsCanvas from "../../components/Stars";
import { TbArrowMoveUp } from "react-icons/tb";


const IntroText = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-center mb-8 lg:mb-12"
  >
    <p className="text-xl md:text-4xl font-bold text-[--text-color]">
      No passport required <br /> just bring your ideas <br /> let&apos;s connect worldwide !
    </p>
    <p className="mt-4 text-xs text-white/70 dark:text-black/70">
      you can play with this globe
    </p>
    <p className="mt-4 text-xs text-white/70 dark:text-black/70">
      <a href="#form" className="text-accent">
        Click here
      </a>
    </p>
  </motion.div>
);

const GlobeSection = ({ delayTime = 2000 }) => {
  const [showGlobe, setShowGlobe] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGlobe(true);
    }, delayTime);

    return () => clearTimeout(timer);
  }, [delayTime]);

  const globeComponent = useMemo(() => <GlobeDemo />, []);

  return (
    <div className="w-full lg:w-1/2 aspect-square min-w-[550px] max-w-[700px] order-1 lg:order-2">
      {showGlobe ? (
        globeComponent
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-[--text-color]">.</p>
        </div>
      )}
    </div>
  );
};

const ContactForm = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = React.useState(false);
  const formRef = React.useRef(null);
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);

  const handleKeyDown = (event, nextInputRef) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const formElement = formRef.current;

      if (formElement.checkValidity()) {
        if (nextInputRef) {
          nextInputRef.current.focus();
        } else {
          handleSubmit(event);
        }
      } else {
        formElement.reportValidity();
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formElement = formRef.current;

    if (formElement.checkValidity()) {
      setLoading(true);
      // Simulate form submission
      setTimeout(() => {
        alert("Form submitted successfully!");
        setLoading(false);
        setForm({ name: "", email: "", message: "" });
      }, 2000);
    } else {
      formElement.reportValidity();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: -20, behavior: "smooth" });
  };

  return (
    <div className="w-full lg:w-1/2 max-w-[500px] order-2 lg:order-1 translate-y-40 pb-20 lg:py-20 lg:translate-y-0">
      <div className="justify-center items-center flex flex-col max-h-[450px]" > 
      <p className="text-center flex lg:hidden  my-3 justify-center">
        <TbArrowMoveUp
          onClick={scrollToTop}
          className="text-accent cursor-pointer text-4xl"
        />
      </p>
      <h2 className="text-center text-xl md:text-3xl font-bold text-[--text-color] mb-6">
        Let&apos;s get to know each other
      </h2>
      <form
        id="form"
        onSubmit={handleSubmit}
        ref={formRef}
        className="space-y-4 mb-4"
      >

        <input
          ref={input1Ref}
          type="text"
          placeholder="Whats your name?"
          className="w-full h-3 rounded-xl  p-5 placeholder-[--text-color] text-[--text-color] bg-[#181818] dark:bg-[#afafaf] focus:border-none  transition-all duration-300"
          name="name"
          value={form.name}
          onKeyDown={(event) => handleKeyDown(event, input2Ref)}
          onChange={handleChange}
          required
        />
        <input
          ref={input2Ref}
          type="email"
          placeholder="Email"
          className="w-full h-3 rounded-xl  p-5 placeholder-[--text-color] text-[--text-color] bg-[#181818] dark:bg-[#afafaf] focus:border-none transition-all duration-300"
          name="email"
          value={form.email}
          onKeyDown={(event) => handleKeyDown(event, input3Ref)}
          onChange={handleChange}
          required
        />
        <textarea
          ref={input3Ref}
          placeholder="Message"
          className="w-full rounded-xl  p-5 placeholder-[--text-color] text-[--text-color] bg-[#181818] dark:bg-[#afafaf] focus:border-none h-32 transition-all duration-300"
          name="message"
          value={form.message}
          onChange={handleChange}
          onKeyDown={(event) => handleKeyDown(event, null)}
          required
        ></textarea>
        <button
          type="submit"
          className="w-full rounded-lg bg-accent p-4 text-black font-semibold hover:bg-accent-dark transition-all hover:scale-105 duration-300"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <FloatNavBar />
      <Stairs>
        <div className="flex-grow flex flex-col items-center justify-start pt-20 px-4 lg:px-8">
          <IntroText />
          <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-center lg:items-start items-center gap-4 lg:gap-16">
            <StarsCanvas />
            <GlobeSection />
            <ContactForm />
          </div>
        </div>
      </Stairs>
    </div>
  );
};

export default Index;
