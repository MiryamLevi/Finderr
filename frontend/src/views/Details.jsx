import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { gigService } from "../services/gig.service";
import { GigSlideshowImage } from "../cmps/GigSlideshowImage";

export function Details() {
  const { gigId } = useParams()
  const [gig, setGig] = useState(null)

  useEffect(() => {
    loadGig()
  }, [gigId])

  async function loadGig() {
    try {
      const gig = await gigService.getById(gigId)
      setGig(gig)
    } catch (error) {
      console.log('Had issues loading gig:', error)
    }
  }

  if (!gig) return <div>Loading...</div>
  return (
    <section className="details-section">
      <h1>Details</h1>
      <main>
        <Link to='/'>Home</Link>
        <div className="gig-overview">
          <h1>{gig.title}</h1>
          <div className="seller-overview">

            <img alt="seller" className="seller-img" src={gig.owner.imgUrl} />
            <h4>{gig.owner.fullName}</h4>

            <div className="stars">
            <FaStar />{gig.owner.rate}
            </div>
          </div>
        </div>

        <GigSlideshowImage  gigId={gigId}/>
        {/* <div className="gig-gallery">
          
        </div> */}
      </main >
    </section >
  )
}
