import { Route, Routes, useNavigate } from "react-router-dom"

// nested routes
import Planets from "./Planets"

export default function About() {
    const navigate = useNavigate()

    return (
        <div className="content">
            <h2>About</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tempora nisi eligendi quod ut illo cumque quibusdam reprehenderit veniam. Cum eaque, nostrum fugit ut inventore assumenda perspiciatis sed maiores numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nam repellat hic dolore officia sequi quis quod commodi iusto doloremque. Corporis in et placeat unde sapiente perspiciatis minus! Recusandae, ad!</p>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tempora nisi eligendi quod ut illo cumque quibusdam reprehenderit veniam. Cum eaque, nostrum fugit ut inventore assumenda perspiciatis sed maiores numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nam repellat hic dolore officia sequi quis quod commodi iusto doloremque. Corporis in et placeat unde sapiente perspiciatis minus! Recusandae, ad!</p>

            <button onClick={() => navigate('/planets')}>See featured SWAPI people</button>
            <Routes>
                <Route path="planets" element={<Planets />} />
                </Routes>

    </div>
                )
}
