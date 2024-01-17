import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Home } from './views/Home';
import { Explore } from './views/Explore';
import { Details } from './views/Details';
import { Header } from './cmps/Header';
import { Footer } from './cmps/Footer';
import { SellerRegister } from './views/SellerRegister';
import { SignIn } from './cmps/SignIn';

function App() {

  return (
    <Router>
      <Header/>
      <SignIn/>
      <Explore/>
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/gig/:gigId" element={<Details />} />       
        <Route path="/seller/register" element={<SellerRegister />} />       
        </Routes>
      </main>
      <Footer/>
  </Router>
  )
}

export default App;
