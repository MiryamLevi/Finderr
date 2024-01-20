import { IoSearchOutline } from "react-icons/io5"
import { PiBellSimple } from "react-icons/pi";
import { GoMail } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";

export function Header() {

  function handlChange(ev){
    console.log("event inpot", ev);
  }

    return <section className="app-header">
      <h1 className='logo'> finder<span className="space-font">r<span className="point">.</span></span></h1>
      <form>
        <input onChange={handlChange} name="txt" type="text" placeholder="What service are you looking for today?"/>
        <button><IoSearchOutline/></button>
      </form>
      <nav>
        <ul>
          <li><PiBellSimple/></li>
          <li><GoMail/></li>
          <li><FaRegHeart/></li>
        </ul>
      </nav>
    </section>
  }
  