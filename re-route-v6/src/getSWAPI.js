import { useParams } from "react-router-dom";
import { useFetch } from "./useFetch";


const getSWAPI = () => {

    const params = useParams()
    const { data, error, loading } = useFetch(`https://swapi.dev/api/getSWAPI/people/${params.id}`)
    const { people:[id], name, planets } = data;

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (!id) {
        return error || <h2>ERROR...</h2>
    }

    return (
        <div className="App">
            <div className="content">
                <h1 className="name">{id} - {name}</h1>
            </div>
            <div className="image">
                <h5 className="planets">{planets}</h5>
            </div>
        </div>
    )
}

export default getSWAPI;