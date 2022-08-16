import React from 'react'
import CararteresList from './components/CararteresList'

function App() {
  return (
    <div className="bg-dark text-white">
       <h2 className="text-center">Autor: EdgarDev</h2>
      <h1 className='bg-dark text-primary text-center display-1 py-4'>Rick and Morty Api</h1>
      <CararteresList/>
    </div>
  )
}

export default App