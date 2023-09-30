import { useState } from "react";

const Formulario = ({colaboradores, setColaboradores}) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [edad, setEdad] = useState('');
    const [cargo, setCargo] = useState('');
    const [telefono, setTelefono] = useState('')
    const [mensaje, setMensaje] = useState('')
    // const [datos, setdatos] = useState({nombre:'', email:'', edad:'', cargo: '', telefono: ''})
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(nombre === '' || email === '' || edad === '' || telefono === ''){
            setMensaje('Faltan campos por llenar');
        } else{
            const colaborador = { nombre, email, edad, cargo, telefono}
            setColaboradores([...colaboradores, colaborador])
            setMensaje('Colaborador agregado.')
        }
    };

    return(
        <>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h2>Agregar colaborador</h2>
                <form onSubmit={handleSubmit}>
                    <input className="form-control mb-3" type="text" name="nombre" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                    <input className="form-control mb-3" type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input className="form-control mb-3" type="number" name="edad" placeholder="Edad" value={edad} onChange={(e) => setEdad(e.target.value)}/>
                    <input className="form-control mb-3" type="text" name="cargo" placeholder="Cargo" value={cargo} onChange={(e) => setCargo(e.target.value)}/>
                    <input className="form-control mb-3" type="number" name="telefono" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
                    <button className="btn btn-info" type="submit">Agregar colaborador</button>
                </form>
            </div>
        </>
    );
};

export default Formulario;