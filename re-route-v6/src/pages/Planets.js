import { useState } from "react"
//import '../getSWAPI.js'

export default function Planets() {
  const [items] = useState([
    { name: ''},
    { title: 'Ninja Sneakers', price: 34.99 },
    { title: 'Ninja Tee', price: 12.99 }
  ])

  return (
    <div>
      <h3>HomeWorlds</h3>
      <div className="planets">
        {items.map(item => (
          <div key={item.title}>
                <img src="https://via.placeholder.com/350x200" alt="people" /> {/* http://localhost:3000/about/planets */}
            <h4>{item.name}</h4>
                <p>{item.title}</p>
                <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}