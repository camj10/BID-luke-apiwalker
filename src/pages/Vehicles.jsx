import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const Vehicles = () => {
    const{id}= useParams();
    const {data, error, loading} =useFetch(`https://swapi.dev/api/vehicles`,id);
    console.log(data);

return (
    <div>
        {
        (loading)?<p>Cargando...</p>
        : 
        (Number(id)> data.results.lenght ?<p>Estos no son los androides que estabas buscando</p>
        :
        <div>
                <h1>{data.results[id-1].name}</h1>
                <p>Model: {data.results[id-1].model} </p>
                <p>Manufacturer: {data.results[id-1].manufacturer} </p>
                <p>Length: {data.results[id-1].length} </p>
        </div>)
        }
        {error && <p>{error}</p>}
    </div>
    )
}
export default Vehicles