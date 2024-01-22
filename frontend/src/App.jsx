import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Explore } from "./views/Explore";
import { Details } from "./views/Details";
import { MainHeader } from "./cmps/header/MainHeader";
import { Footer } from "./cmps/Footer";
import { SellerRegister } from "./views/SellerRegister";
import { SignIn } from "./cmps/SignIn";
import { GigPreview } from "./cmps/GigPreview";

function App() {
  return (
    <Router>
      {/* <Explore /> */}
      <main className="main-layout">
        <MainHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/gig/:gigId" element={<Details />} />
          <Route path="/seller/register" element={<SellerRegister />} />
        </Routes>
        <GigPreview
          gig={{
            id: 1,
            imgUrl:
              "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/302908371/original/9dc1791adb656f69c3ef2f11fe975454db1e4786/do-modern-minimalist-clean-timeless-business-logo-design-32bb.png",
            owner: {
              imgUrl:
                "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/204f5bd567a26b79d06197574acb9ec1-1672401879022/1633fd71-d3dd-43b1-b8ea-1188ebc559d7.png",
            },
            title: "I will do timeless logo design with copyrights",
          }}
        />
        <GigPreview
          gig={{
            id: 2,
            imgUrl:
              "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/302908371/original/9dc1791adb656f69c3ef2f11fe975454db1e4786/do-modern-minimalist-clean-timeless-business-logo-design-32bb.png",
            owner: {
              imgUrl:
                "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/204f5bd567a26b79d06197574acb9ec1-1672401879022/1633fd71-d3dd-43b1-b8ea-1188ebc559d7.png",
            },
            title: "I will do timeless logo design with copyrights",
          }}
        />
        <Footer />
        <SignIn />
      </main>
    </Router>
  );
}

export default App;
