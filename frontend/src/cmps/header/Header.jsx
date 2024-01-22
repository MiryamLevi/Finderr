import { PiBellSimple } from "react-icons/pi";
import { GoMail } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { SearchHeader } from "./SearchHeader";

export function Header() {

  const loggedinUser = {
    imgUrl: 'https://fiverr-res.cloudinary.com/t_profile_thumb,…90461609/8920f60b-f390-43ec-981c-10fbc4363d91.jpg'
  }
    return <section className="app-header">
      <h1 className='logo'> finder<span className="space-font">r<span className="point">.</span></span></h1>
      <SearchHeader/>
      <nav>
        <ul>
          <li><PiBellSimple/></li>
          <li><GoMail/></li>
          <li><FaRegHeart/></li>
          <li><img src={loggedinUser.imgUrl}/></li>
        </ul>
      </nav>
    </section>
  }
  