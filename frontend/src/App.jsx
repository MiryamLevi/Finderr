import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Explore } from "./views/Explore";
import { Details } from "./views/Details";
import { MainHeader } from "./cmps/header/MainHeader";
import { Footer } from "./cmps/Footer";
import { SellerRegister } from "./views/SellerRegister";
import { SignIn } from "./cmps/SignIn";


// change everywhere the words 'minBatteryStatus' and 'balance' are existed !!!!
function App() {
  return (
    <Router>
      <main className="main-layout">
        <MainHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/gig/:gigId" element={<Details />} />
          <Route path="/seller/register" element={<SellerRegister />} />
        </Routes>

        <Footer />
        <SignIn />
      </main>
    </Router>
  );
}

export default App;
