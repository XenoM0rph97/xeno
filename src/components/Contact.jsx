import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [resShow, setResShow] = useState(false);
  

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the `mailto:` URL
    const mailtoLink = `mailto:xeno97.sec@gmail.com?subject=Message from ${encodeURIComponent(
      form.name
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`
    )}`;

    // Open the mail client
    window.location.href = mailtoLink;

    // Optionally show a message
    setResShow(true);

    // Clear the form
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
  onSubmit={handleSubmit}
  className='mt-12 flex flex-col gap-8'
>
  <label className='flex flex-col'>
    <span className='text-white font-medium mb-4'>Your Name</span>
    <input
      type='text'
      name='name'
      value={form.name}
      onChange={handleChange}
      placeholder="What's your name?"
      className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
      required
    />
  </label>
  <label className='flex flex-col'>
    <span className='text-white font-medium mb-4'>Your email</span>
    <input
      type='email'
      name='email'
      value={form.email}
      onChange={handleChange}
      placeholder="What's your email?"
      className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
      required
    />
  </label>
  <label className='flex flex-col'>
    <span className='text-white font-medium mb-4'>Your Message</span>
    <textarea
      rows={7}
      name='message'
      value={form.message}
      onChange={handleChange}
      placeholder='What would you like to talk about?'
      className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
      required
    />
  </label>
  <div className="grid grid-flow-col gap-4 items-center">
    <button
      type='submit'
      className='bg-tertiary py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary'
    >
      Send
    </button>

    {/* Alternative for users without email clients */}
    <div>
      <p className='font-sans text-xs align-center font-small mb-2'>
        You can also reach out directly at: <a
        href="mailto:xeno97.sec@gmail.com"
        className='underline font-sans text-xs align-center font-small mb-2'
      >
        xeno97.sec@gmail.com
      </a>
      </p>
    </div>
  </div>

  {/* Social links */}
  <div className='flex justify-center mt-4 gap-4 items-center'>
    <a
      href="https://github.com/XenoM0rph97"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="./src/assets/github.png"
        alt="GitHub Logo"
        className='w-10 h-10'
      />
    </a>
    <a
      href="https://www.linkedin.com/in/xenom0rph/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="./src/assets/linkedin_logo.png"
        alt="LinkedIn Logo"
        className='w-8 h-8'
      />
    </a>
  </div>
</form>


      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 flex-shrink-0 xl:h-auto md:h-[550px] h-[350px] max-h-[850px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
