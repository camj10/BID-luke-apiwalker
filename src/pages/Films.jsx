import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';

const Films = () => {
    const{id}= useParams();
    const {data, error, loading} = useFetch(`https://swapi.dev/api/films`,id);

return (
    <div>
        {
        (loading)?<p>Cargando...</p>
        : 
        (Number(id)>data.results.lenght?<p>Estos no son los androides que estabas buscando</p>
        :
        <div>
                <h1>{data.results[id-1].title}</h1>
                <p>Episode id:{data.results[id-1].episode_id} </p>
                <p>Director: {data.results[id-1].director} </p>
                <p>Producer: {data.results[id-1].producer} </p>
        </div>)
        }
        {error&&<p>{error}</p>}
    </div>
    )
}

export default Films