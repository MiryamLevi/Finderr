import CustomSelect from "../cmps/Explore/CustomSelect";
import { GigPreview } from "../cmps/GigPreview";
import { GigIndex } from "./GigIndex";

export function Explore() {
  return (
    <div className="explore">
      <h1>Explore Page</h1>
      <div className="explore-header">
        <button className="clear options-btn">Clear Filter</button>
        <CustomSelect />
        <select className="order-delivery-time options-btn">
          <option value="express">Express 24 hours</option>
          <option value="upto3days">Up to 3 days</option>
          <option value="upto7days">Up to 7 days</option>
          <option value="anytime" selected>
            Anytime
          </option>
        </select>
        <div className="switches">
          <div className="pro-switch">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            Pro services
          </div>
          <div className="online-sellers-switch">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            Online sellers
          </div>
        </div>
      </div>
      <div className="explore-main">
        <p>37 Services available</p>
        <label>
          Sort By{" "}
          <select>
            <option value="rating">Highest Rating</option>
            <option value="level">Seller Level</option>
          </select>
        </label>
        {/* <GigPreview
          gig={{
            id: 1,
            imgUrl:
              "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/302908371/original/9dc1791adb656f69c3ef2f11fe975454db1e4786/do-modern-minimalist-clean-timeless-business-logo-design-32bb.png",
            owner: {
              imgUrl:
                "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/204f5bd567a26b79d06197574acb9ec1-1672401879022/1633fd71-d3dd-43b1-b8ea-1188ebc559d7.png",
              fullName: "Gorge"        
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
                fullName: "Robin"        
            },
            title: "I will do timeless logo design with copyrights",
          }}
        /> */}
        <GigIndex />
        <div className="pages">
          <button>&lt;</button>
          <button>1</button>
          <button>&gt;</button>
        </div>
      </div>
    </div>
  );
}
