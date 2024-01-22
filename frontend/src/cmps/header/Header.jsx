import { PiBellSimple } from "react-icons/pi";
import { GoMail } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { SearchHeader } from "./SearchHeader";
import { Link } from "react-router-dom";

export function Header() {

  const loggedInUser = {
    imgUrl: 'https://fiverr-res.cloudinary.com/t_profile_thumb,…90461609/8920f60b-f390-43ec-981c-10fbc4363d91.jpg'
  }
    return <section className="app-header">
      <Link style={{textDecoration: 'none'}} to="/"><h1 className='logo'> finder<span className="space-font">r<span className="point">.</span></span></h1></Link>
      <SearchHeader/>
      <nav>
        <ul>
          <li className="explore-link header-link"><Link style={{textDecoration: 'none'}} to="/explore">Explore</Link></li>
          <li><PiBellSimple/></li>
          <li><GoMail/></li>
          <li><FaRegHeart/></li>
          <li><img src={loggedInUser.imgUrl}/></li>
        </ul>
      </nav>
    </section>
  }
  