import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import People from './pages/People'
import Planets from './pages/Planets'
import PeopleDetails from './pages/PeopleDetails'
//import './getSWAPI.js'
//import './index.html'

function App() {
    const [empty] = useState(true)

    return (
        <div className="App">
            <p>testing</p>
            <BrowserRouter>
                <nav>
                    <h1>SWAPI Clothing Co.</h1>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/people">People</Link>
                    <Link to="/planets">Planets</Link>
                </nav>
                <Routes>
                    <Route path="/" element={ <Home />} />
                    <Route path="/about/*" element={<About />} />
                    <Route path="/people/:id/*" element={<PeopleDetails />} /> 
                    <Route path="/people/" element={<People />} />
                    <Route path="/planets/" element={<Planets />} />
                    
                    <Route path="/test" element={(
                        <div>
                            <h2>Test Page</h2>
                            <p>Hello</p>  {/* http://localhost:3000/test */}
                        </div>
                    )} />
                    <Route path="/redirect" element={<Navigate to="/about" />} />
                    <Route path="/check"
                        element={empty ? <Navigate to="/people" /> : <p>check</p>}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    )

}

export default App