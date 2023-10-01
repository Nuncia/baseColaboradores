import { useState } from "react";

const Formulario = ({colaboradores, setColaboradores}) => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [edad, setEdad] = useState('');
    const [cargo, setCargo] = useState('');
    const [telefono, setTelefono] = useState('')
    const [mensaje, setMensaje] = useState('')
    // const [datos, setdatos] = useState({nombre:'', email:'', edad:'', cargo: '', telefono: ''})
    
    const resetForm = ()=> {
        setNombre('');
        setCorreo('');
        setEdad('');
        setCargo('');
        setTelefono('');
    };

    const newId = colaboradores.length + 1;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(nombre === '' || correo === '' || edad === '' || telefono === ''){
            setMensaje('Faltan campos por llenar');
            return
        } else{
            const colaborador = { 
                id: newId,
                nombre,
                correo,
                edad,
                cargo,
                telefono
            }
            setColaboradores([...colaboradores, colaborador])
            setMensaje('Colaborador agregado.');
            resetForm();
        }
    };

    return(
        <>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h2>Agregar colaborador</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        className="form-control mb-3" 
                        type="text"
                        name="nombre" 
                        placeholder="Nombre" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)}/>
                    <input 
                        className="form-control mb-3" 
                        type="correo" 
                        name="correo" 
                        placeholder="Email" 
                        value={correo} 
                        onChange={(e) => setCorreo(e.target.value)}/>
                    <input 
                        className="form-control mb-3" 
                        type="number" 
                        name="edad" 
                        placeholder="Edad" 
                        value={edad} 
                        onChange={(e) => setEdad(e.target.value)}/>
                    <input 
                        className="form-control mb-3" 
                        type="text" 
                        name="cargo" 
                        placeholder="Cargo" 
                        value={cargo} 
                        onChange={(e) => setCargo(e.target.value)}/>
                    <input 
                        className="form-control mb-3" 
                        type="number" 
                        name="telefono" 
                        placeholder="Teléfono" 
                        value={telefono} 
                        onChange={(e) => setTelefono(e.target.value)}/>
                    <button 
                        className="btn btn-info"
                        type="submit">
                        Agregar colaborador
                    </button>
                </form>
                {mensaje && <p>{mensaje}</p>}
            </div>
        </>
    );
};

export default Formulario;