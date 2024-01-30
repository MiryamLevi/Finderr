import { PiBellSimple } from "react-icons/pi";
import { GoMail } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { SearchHeader } from "./SearchHeader";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

export function Header() {

  const [loggedinUser, setLoggedinUser] = useState(null)

  useEffect(() => {
    setLoggedinUser({
      username: 'Avigail',
        fullname: 'Avigail',
        password: '1234',
        imgUrl: 'https://res.cloudinary.com/avigail/image/upload/v1706007103/finder/user%20imgs/mmws3jzv98qmdlpojvbu.jpg',
        isSeller: false
      })
  }, [])

  function BecomeASeller(){
    setLoggedinUser({...loggedinUser, isSeller: !loggedinUser.isSeller })
  }


    return <section className="app-header">
      <Link style={{textDecoration: 'none'}} to="/"><h1 className='logo'> finder<span className="space-font">r<span className="point">.</span></span></h1></Link>
      <SearchHeader/>
      {loggedinUser ? (
      <nav className="for-loggedIn">
        <ul>
          { loggedinUser.isSeller ? (
          <li><a onClick={BecomeASeller}>UnSeller  </a>
          <Link to="/Edit">Add GIG</Link></li> 
                    ) : (
            <li><a onClick={BecomeASeller}>Become a Seller </a></li>
            )}
          <li><PiBellSimple/></li>
          <li><GoMail/></li>
          <li><FaRegHeart/></li>
          <li>Orders</li>
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
  