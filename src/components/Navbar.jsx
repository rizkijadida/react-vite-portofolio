
import { FaWhatsappSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex  md:gap-6 gap-1 bg-indigo-300 mx-auto w-screen md:justify-end  md:px-5 justify-start -left- md:pr-5 fixed">
      <p>Home</p>
      <p>profile</p>
      <p>Education</p>
      <p className="flex">
        Contact Me
        <FaWhatsappSquare />
      </p>
    </div>
  );
};

export default Navbar;
