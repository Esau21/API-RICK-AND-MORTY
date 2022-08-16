import React from 'react'

function Cararter({cararter}) {
  return (
    <div className="bg-dark card">
        <div className="card-header">
            <h3 className="text-success">PERSONAJES RICK AND MORTY</h3>
        </div>
        <div className="card-body">
        <div className="text-center p-5">
        <h3>{cararter.name}</h3>
        <img className="img-fluid" src={cararter.image} alt={cararter.name} />
        <p className="text-warning py-2">{cararter.origin.name}</p>
    </div>
        </div>
    </div>
  )
}

export default Cararter