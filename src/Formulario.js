import React, { useState } from 'react';
const Formulario = () => {
    const [nombre, setNombre] = useState();
    const [mensaje, setMensaje] = useState();
    const [fecha, setFecha] = useState();


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Formulario enviado:', { nombre, mensaje, fecha })
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
            </label>
            <input type="text" value={nombre} onChange={(event) => setNombre(event.targe.value)}></input>
            <label>
                Mensaje:
            </label>
            <textarea value={mensaje} onChange={(event) => setMensaje(event.targe.value)}></textarea>
            <label>
                Fecha-recordatorio:
            </label>
            <input type="date" value={fecha} onChange={(event) => setFecha(event.targe.value)}></input>
            <br />
            <button type='submit'>Enviar</button>
        </form>
    );
};

export default Formulario 