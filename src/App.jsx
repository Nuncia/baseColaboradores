import { useState } from 'react'
import './App.css';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Buscador from './components/Buscador';
import { BaseColaboradores } from './components/BaseColaboradores';

function App() {
   const [colaboradores, setColaboradores] = useState(BaseColaboradores)
   
   return (
    <>
     <div className="container" style={{}}>
        <div style={{display: 'flex'}}>
          <Formulario colaboradores={colaboradores} setColaboradores={setColaboradores}/>
          <Listado colaboradores={colaboradores} />
        </div>
        {/* <Alert/> */}
     </div>
    </>
  )
}

export default App
