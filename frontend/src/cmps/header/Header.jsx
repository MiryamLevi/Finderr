import { PiBellSimple } from "react-icons/pi";
import { GoMail } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { SearchHeader } from "./SearchHeader";
import { useEffect, useState } from "react";

export function Header() {

  const [loggedinUser, setLoggedinUser] = useState(null)

  useEffect(() => {
 setLoggedinUser(null)
  }, [])


    return <section className="app-header">
      <h1 className='logo'> finder<span className="space-font">r<span className="point">.</span></span></h1>
      <SearchHeader/>
      {loggedinUser ? (
      <nav className="for-loggedIn">
        <ul>
          <li><PiBellSimple/></li>
          <li><GoMail/></li>
          <li><FaRegHeart/></li>
          <li><img src={loggedinUser.imgUrl}/></li>
        </ul>
      </nav>

      ) : (

      <nav className="for-UnloggedIn">
        <ul>
          <li><a>Finderr Pro</a></li>
          <li>Explore</li>
          <li>English</li>
          <li><a>Become a seller</a></li>
          <li><a>Sine In</a></li>
          <button>Join</button>
        </ul>
      </nav>
      )}
    </section>
  }
  