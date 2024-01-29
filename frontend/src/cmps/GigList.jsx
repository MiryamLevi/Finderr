import { Link } from "react-router-dom";
import { GigPreview } from "./GigPreview";


export function GigList({ gigs, onRemove }) {

    return (
        <ul className="gig-list">
            {
                gigs.map(gig => <li key={gig.id}>
                    <GigPreview gig={gig} />
                    <div className="gig-actions">
                        <button onClick={() => onRemove(gig.id)}>X</button>
                        <Link to={`/gig/edit/${gig.id}`}>Edit</Link>
                    </div>
                </li>)
            }
        </ul>
    )
}
