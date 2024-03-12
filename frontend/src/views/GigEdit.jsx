import { useState } from "react"
import { Navigate } from "react-router-dom"
import { gigService } from "../services/gig.service"
import { saveGig } from "../store/actions/gig.actions"

export function GigEdit() {
  const [gig, setGig] = useState(gigService.createGig())

  const categorys = [
    "GRAPHICS & DESIGN",
    "DIGITAL MARKETING",
    "WRITING & TRANSLATION",
    "VIDEO & ANIMATION",
    "MUSIC & AUDIO",
    "PROGRAMMING & TECH",
    "DATA",
    "BUSINESS",
    "LIFESTYLE",
    "PHOTOGRAPHY",
    "END-TO-END-PROJECTS",
  ]

  async function onSubmitGig(ev) {
    ev.preventDefault()
    try {
      saveGig(gig)
      Navigate("/explor")
    } catch (err) {
      console.log("Had issues saving gig", err)
    }
  }

  function handleChange({ target }) {
    let { name: field, value, type } = target
    // console.log(type);
    switch (type) {
      case "number":
      case "range":
        value = +value || ""
        break
      case "checkbox":
        value = target.checked
        break
      default:
        break
    }
    setGig((prevGig) => ({ ...prevGig, [field]: value }))
  }
  const { titel, category } = gig
  return (
    <section className="gig-edit">
      <form onSubmit={onSubmitGig}>
        <div className="top-navbar-container"></div>
        <div className="tab-content-container">
          <div className="gig-edit-container">
            <div className="input-titel form-input-group">
              <div className="input-label">
                <label htmlFor="titel">
                  <span>Gig titel</span>
                </label>
                <div>
                  As your Gig storefront, your title is the most important place
                  to include keywords that buyers would likely use to search for
                  a service like yours.
                </div>
              </div>
              <div className="textarea-titel">
                <textarea
                  value={titel}
                  maxLength={80}
                  placeholder="do something I'm really good at"
                  onChange={handleChange}
                  type="text"
                  id="titel"
                  name="titel"
                />
              </div>
            </div>
            <div className="form-input-group">
                <div className="input-label">
              <label htmlFor="category" className="input-label">
                <span>Category</span>
                <div>Choose the category and sub-category most suitable for your Gig.</div>
              </label>

                </div>
              <select
                value={category}
                onChange={handleChange}
                id="category"
                name="category"
              >
                <option value="">SELECE A CATEGORY</option>
                {categorys.map((categor) => {
                  return <option key={categor}>{categor}</option>
                })}
              </select>
            </div>
          </div>
          <button>Save</button>
        </div>
      </form>
    </section>
  )
}
