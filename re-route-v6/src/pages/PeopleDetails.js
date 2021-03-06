import { Route, Routes, useParams } from "react-router-dom"

// nested routes
import Planets from "./Planets"


export default function PeopleDetails() {
    const { id } = useParams()

  return (
    <div className="content">
      <div className="people">
        <div className="image">
          <img src="https://swapi.dev/api/people/" alt="" />
        </div>
        <div className="planets">
          <h2>People - {id}</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eaque repudiandae itaque dolorem nihil, voluptas corporis tempora provident optio harum modi inventore esse nostrum exercitationem magnam tempore odio laborum velit! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi voluptate neque harum. Quam facere accusamus exercitationem in quidem mollitia eligendi porro eos voluptates iure incidunt, laudantium sed harum omnis quasi?</p>
        </div>
          </div>
          <Routes>
              <Route path="/planets" element={<Planets />} />
         </Routes>
    </div>
  )
}
