import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
function App() {
   const [colaboradores, setColaboradores] = useState([])

   return (
    <>
      <div style={{display: 'flex'}}>
        <Formulario colaboradores={colaboradores} setColaboradores={setColaboradores}/>
        
      </div>
    </>
  )
}

export default App
