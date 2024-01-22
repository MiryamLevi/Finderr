import { CategoriesMenu } from "./CategoriesMenu"
import { Header } from "./Header"

export function MainHeader(){
    return <section className="main-header full">
        <header className="main-layout"><Header/></header>
        <nav className="nav-header main-layout"><CategoriesMenu/></nav>
    </section>
}