import logo from "../assets/evrimLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img src={logo} className="mx-1 w-44" alt="logo"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/evrim-ciftci-1543b0258/"  target='_blank'>   <FaLinkedin /></a>
          <a href="https://github.com/EvrimCiftci"  target='_blank'><FaGithub/></a>
          
        </div>
     </nav>
      
    </>

  )

}
export default Navbar;