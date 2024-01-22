import { Link } from "react-router-dom";

export function GigPreview({ gig }) {
  return (
    <article className="gig-preview">
      <Link to={`/gig/${gig.id}`}>
        <img style={{ height: "250px", width: "230px" }} src={gig.imgUrl} />
        <article className="mini-user">
          <img src={gig["owner"].imgUrl} />
        </article>
        <h4>{gig.title}</h4>
      </Link>
    </article>
  );
}
