import { CategoriesMenu } from "./CategoriesMenu"
import { Header } from "./Header"

export function MainHeader(){
    return <section className="main-header">
        <header><Header/></header>
        <nav className="nav-header"><CategoriesMenu/></nav>
    </section>
}