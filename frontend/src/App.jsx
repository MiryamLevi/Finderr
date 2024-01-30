import { Route, HashRouter as Router, Routes } from "react-router-dom"
import { Home } from "./views/Home"
import { Explore } from "./views/Explore"
import { Details } from "./views/Details"
import { MainHeader } from "./cmps/header/MainHeader"
import { Footer } from "./cmps/Footer"
import { SellerRegister } from "./views/SellerRegister"
import { SignIn } from "./cmps/SignIn"
import { GigEdit } from "./views/GigEdit"
import { GigIndex } from "./views/GigIndex";

function App() {
  return (
    <Router>
      {/* <Explore /> */}
      <main className="main-app main-layout">
        <MainHeader />
        <Routes className="main-routes">
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/gig/:gigId" element={<Details />} />
          <Route path="/seller/register" element={<SellerRegister />} />
          <Route path="/edit" element={<GigEdit />} />
        </Routes>
        <GigIndex />
        <Footer />
        <SignIn />
      </main>
    </Router>
  );
}

export default App;
