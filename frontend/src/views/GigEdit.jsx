import { useState } from "react";
import { Navigate } from "react-router-dom";
import { gigService } from "../services/gig.service";


export function GigEdit(){

    const [gig, setGig] = useState(gigService.createGig())

    const categorys = ['GRAPHICS & DESIGN', 'DIGITAL MARKETING', 'WRITING & TRANSLATION', 'VIDEO & ANIMATION', 'MUSIC & AUDIO', 'PROGRAMMING & TECH', 'DATA', 'BUSINESS', 'LIFESTYLE', 'PHOTOGRAPHY', 'END-TO-END-PROJECTS']

    async function onSubmitGig(ev) {
        ev.preventDefault()
        try {
            // onSaveRobot(robot)
            Navigate('/explor')
        } catch (err) {
            console.log('Had issues saving gig', err);
        }
    }

    function handleChange({ target }) {
        let { name: field, value, type } = target
        // console.log(type);
        switch (type) {
            case 'number':
            case 'range':
                value = (+value || '')
                break;
            case 'checkbox':
                value = target.checked
                break;
            default:
                break;
        }
        setGig((prevGig) => ({ ...prevGig, [field]: value }))
    }
    
    // console.log(gig);
    const { titel, category} = gig
    return <section className="gig-edit">
        <form onSubmit={onSubmitGig}>
                <label htmlFor="titel">Gig title</label>
                <input value={titel} onChange={handleChange} type="text" id="titel" name="titel" />

                <label htmlFor="category">Category</label>
                <select value={category} onChange={handleChange}
                    id="category" name="category">
                    <option value="">SELECE A CATEGORY</option>
                    {categorys.map((categor) => {
                     return <option key={categor}>{categor}</option>
                    })}
                </select>

                {/* <label> Battery status {batteryStatus}
                    <input type="range" value={batteryStatus} onChange={handleChange}
                        id="battery" name="batteryStatus" />
                </label> */}
                <button>Save</button>
            </form>
    </section>
}