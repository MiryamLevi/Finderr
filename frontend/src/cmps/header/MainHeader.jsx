import { useEffect, useRef, useState } from "react"
import { CategoriesMenu } from "./CategoriesMenu"
import { Header } from "./Header"
import { useLocation } from "react-router-dom"

export function MainHeader() {
  const scrollHeaderRef = useRef(null)
  const scrollNavRef = useRef(null)
  const [dynamicClassHeader, setDynamicClassHeader] = useState("")
  const [dynamicClassNav, setDynamicClassNav] = useState("")
  const [dynamicClassPage, setDynamicClassPage] = useState("")
  const location = useLocation()

  useEffect(() => {
    if(location.pathname === '/'){
        setDynamicClassPage('home');
        const observer = new IntersectionObserver(
          (entries) => {
            for (let i = 0; i < entries.length; i++) {
              const element = entries[i]
              if (element.target.id === "headerScroll") {
                if (!element.isIntersecting) {
                    setDynamicClassHeader("header-scrolling")
                } else {
                    setDynamicClassHeader("")
                }
            } else {
                if (!element.isIntersecting) {
                    setDynamicClassNav("nav-scrolling")
                } else {
                    setDynamicClassNav("")
                }
              }
            }
          },
          { root: null }
        )
    
        if (observer) {
          observer.observe(scrollHeaderRef.current)
          observer.observe(scrollNavRef.current)
        }
    
        return () => {
          if (observer) {
            observer.disconnect()
          }
        }
    }else{
        setDynamicClassPage('not-home');
    }
  }, [location.pathname])

  return (
    <section className="main-header full">
      <section className={`${dynamicClassPage} ${dynamicClassHeader} ${dynamicClassNav}`}>
        <header className='main-layout'>
          <Header />
        </header>
        <nav className='nav-header main-layout'>
          <CategoriesMenu />
        </nav>
      </section>
      <div id="headerScroll" ref={scrollHeaderRef}></div>
      <div id="navScroll" ref={scrollNavRef}></div>
    </section>
  )
}
