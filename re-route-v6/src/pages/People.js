import { Link } from "react-router-dom"

export default function People() {
  return (
    <div className="content">
      <h3>Hoodies</h3>
      <div className="people">
        {[0,1,2,3].map(p => (
          <div key={p}>
            <Link to={`/people/${p}`}>
                    <img src="https://via.placeholder.com/250x150" alt="people" />
            </Link>
          </div>
        ))}
      </div>
      <h3>Tees</h3>
      <div className="people">
        {[4,5,6,7].map(p => (
          <div key={p}>
            <Link to={`/people/${p}`}>
                    <img src="https://via.placeholder.com/250x150" alt="people" />
            </Link>
          </div>
        ))}
      </div>
      <h3>Sneakers</h3>
      <div className="people">
        {[8,9,10,11].map(p => (
          <div key={p}>
            <Link to={`/people/${p}`}>
                    <img src="https://via.placeholder.com/250x150" alt="people" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
