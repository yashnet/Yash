import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../assets";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Yash Srivastava</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I am a MERN stack developer specializes in full-stack web development using MongoDB, Express.js, React, and Node.js technologies. Proficient in building dynamic and interactive web applications with a focus on user experience. Skilled in server-side and client-side programming, database management, and API integration to create robust and scalable web solutions.
        </p>
        {/* <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+968 97859628</span>
        </p> */}
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">ysda007@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.youtube.com/channel/UC9IpqIfsvVSqdrainkx4ofA" target="_blank">
            <span className="bannerIcon">
              <FaYoutube />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/yash-srivastava-b1b305208"
            target="_blank"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="/" target="">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
