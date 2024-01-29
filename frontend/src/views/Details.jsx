import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export function Details() {
  const { gigId } = useParams()
  const [gig, setGig] = useState(null)

  useEffect(() => {
    loadGig()
  }, [])

  async function loadGig() {
    try {
      setGig({
        "_id": "g001",
        "title": "I will curate a high-quality email list for your business",
        "price": 774.53,
        "owner": {
          "_id": "u001",
          "fullName": "Zebadiah Golland",
          "imgUrl": "http://dummyimage.com/235x100.png/5fa2dd/ffffff",
          "level": "basic",
          "rate": 3.7
        },
        "daysToMake": 36,
        "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        "imgUrl": "http://dummyimage.com/235x100.png/5fa2dd/ffffff",
        "tags": [
          "colorful logo",
          "vibrant logo",
          "sophisticated logo"
        ],
        "likedByUsers": [
          "u6",
          "u18",
          "u12",
          "u4",
          "u9",
          "u19",
          "u2",
          "u1"
        ]
      })
      // const gig = await gigService.getById(gigId)
      // setGig(gig)
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
        <div class="gig-overview">
          <h1>{gig.title}</h1>
          <div class="seller-overview">

            <img alt="seller" className="seller-img" src={gig.owner.imgUrl} />
            <h4>{gig.owner.fullName}</h4>
            <div className="stars">
            <FaStar />{gig.owner.rate}
            </div>
          </div>
        </div>
      </main >
    </section >
  )
}
