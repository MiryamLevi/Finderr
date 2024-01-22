import { IoSearchOutline } from "react-icons/io5"

export function SearchHeader(){

    function handlChange(ev){
        console.log("event inpot", ev);
      }
    
    return <form className="search-form">
    <input onChange={handlChange} name="txt" type="text" placeholder="What service are you looking for today?"/>
    <button><IoSearchOutline/></button>
  </form>
}