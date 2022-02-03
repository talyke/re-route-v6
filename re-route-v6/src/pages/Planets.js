import { useState } from "react"
//import '../getSWAPI.js'

export default function Planets() {
  const [items] = useState([
    { id: ''},
    { people: '', name: ''},
    { homeworld: ''}
  ])

  return (
    <div>
      <h3>HomeWorlds</h3>
      <div className="planets">
        {items.map(item => (
          <div key={item.id}>
                <img src="https://via.placeholder.com/350x200" alt="people" /> {/* http://localhost:3000/about/planets */}
            <h4>{item.people}</h4>
                <p>{item.name}</p>
                <p>{item.homeworld}</p>
          </div>
        ))}
      </div>
    </div>
  )
}