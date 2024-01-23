import { Link } from "react-router-dom";

export function GigPreview({ gig }) {
  return (
    <article className="gig-preview">
      <Link style={{textDecoration: 'none'}} to={`/gig/${gig.id}`}>
        <img style={{ height: "250px", width: "230px" }} src={gig.imgUrl} />
        <article className="mini-user">
          <img src={gig['owner'].imgUrl} />
          <h3>{gig['owner'].fullName}</h3>
        </article>
        <h4>{gig.title}</h4>
      </Link>
    </article>
  );
}
