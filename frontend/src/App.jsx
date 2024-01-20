import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Home } from './views/Home';
import { Explore } from './views/Explore';
import { Details } from './views/Details';
import { MainHeader } from './cmps/MainHeader';
import { Footer } from './cmps/Footer';
import { SellerRegister } from './views/SellerRegister';
import { SignIn } from './cmps/SignIn';

function App() {

  return (
    <Router>
      <main>
      <MainHeader/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/gig/:gigId" element={<Details />} />       
        <Route path="/seller/register" element={<SellerRegister />} />       
        </Routes>
      <Footer/>
      <SignIn/>
      </main>
  </Router>
  )
}

export default App;
