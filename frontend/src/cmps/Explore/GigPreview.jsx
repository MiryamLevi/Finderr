import { Link } from "react-router-dom"


export function GigPreview({gig}){
    return <article className="gig-card">
        <Link className="img-gig" to={`/gig/${gig.id}`}>
        <div>
            <img src={gig.imagesUrl} alt="" />
        </div>
        </Link>
        <div className="owner-details">
            <div className="owner-name">
                <img src={gig.owner.imgUrl}/>
                <span>Ad by {gig.owner.name}</span>
                </div>
            <div className="level">level {gig.owner.level}</div>
        </div>
        <Link to={`/gig/${gig.id}`}>{gig.title}</Link>
    </article>
}