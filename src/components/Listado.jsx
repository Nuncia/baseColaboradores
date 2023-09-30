import { BaseColaboradores } from "./BaseColaboradores";

const Listado = ({colaboradores}) => {
    


  return (
    <>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h2>Colaboradores</h2>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Teléfono</th>
                    </tr>
                </thead>
                {colaboradores.map((colaborador) => 
                <tbody>
                    <tr key={colaborador.id}>
                       
                     </tr>
                </tbody>
                    )}
            </table>
        </div>
    </>
  )
}

export default Listado