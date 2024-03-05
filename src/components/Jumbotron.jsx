
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const Jumbotron = () => {
  return (
      <div className="bg-indigo-400 py-7 md:py-32">
        <div className="container mx-auto my-auto px-4 border-red-900 x">
          <div className="  grid grid-cols-1 md:justify-center md:grid-cols-2 md:h-96 ">
            <div className="flex  flex-col justify-center font-bold">
                <p className="text">Hello, My Name is</p>
                <h1 className="text-white text-2xl md:text-4xl">
                  Rahmad Rizki Jadida
                </h1>
                <p>Student of Puwadhika</p>
                <div className="flex items-center gap-4 mt-5 mx auto">
                  <a href="https://www.instagram.com/rizkijadida/">
                    <FaInstagram size={30} />
                  </a>
                  <a href="https://www.linkedin.com/in/rahmad-rizki-jadida-287965248/">
                    <FaLinkedin size={30} />
                  </a>
                  <a href="https://github.com/rizkijadida">
                    <FaSquareGithub size={30} />
                  </a>
                </div>
            </div>
            <div className="relative -left-20">
              <img src="orang1.png" alt="rizki"/>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Jumbotron;
