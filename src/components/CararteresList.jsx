import React from 'react'
import { useEffect, useState } from 'react';
import Cararter from './Cararter';

function Navegacion(props) {
    return (
        <header className="d-flex justify-content-between py-2 align-items-center">
            <p> pagina: {props.page}</p>
            <button className="btn btn-outline-success btn-sm"
            onClick={() => props.setPage(props.page + 1)}
            >
               Pagina {props.page + 1}
            </button>
        </header>
    )
}

function CararteresList() {

    const [characters, usecararteres] = useState([]);
    const [loading, setloading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function Rick() {
            const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
            const data = await res.json();
            setloading(false);
            usecararteres(data.results);
        }

        Rick();
    },[page]);



  return (
    <div className="container">
        <Navegacion page={page} setPage={setPage}/>
       {
         loading ? <h1 className="text-success">Loading...</h1> : (
            <div className="row">
            {
                characters.map(cararter => {
                    return (
                        <div className="col-md-4" key={cararter.id}>
                            <Cararter cararter={cararter} />
                        </div>
                    )
                })
            }
            </div>
            
         )
       }
        <Navegacion page={page} setPage={setPage}/>
    </div>

  )
}

export default CararteresList