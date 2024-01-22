import { IoLogoTiktok } from "react-icons/io5"
import { RiInstagramLine, RiTwitterXLine } from "react-icons/ri"
import { FaLinkedin, FaFacebook, FaPinterest } from "react-icons/fa"
import { MdOutlineAccessibility, MdLanguage } from "react-icons/md"

export function Footer() {
  return (
    <footer className="flex">
      <div className="left flex">
        <h1 className="logo">
          finder
          <span className="space-font">
            r<span className="point">.</span>
          </span>
        </h1>
        <span>© Finderr International Ltd. 2024</span>
      </div>
      <div className="right flex">
        <ul className="clean-list flex">
          <li>
            <IoLogoTiktok />
          </li>
          <li>
            <RiInstagramLine />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaPinterest />
          </li>
          <li>
            <RiTwitterXLine />
          </li>
        </ul>
        <div>
          <button>
            <MdLanguage />
            <span> </span>English
          </button>
          <button>$ USD</button>
          <button className="accessibility">
            <MdOutlineAccessibility />
          </button>
        </div>
      </div>
    </footer>
  )
}
