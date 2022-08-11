import React, {useContext, useState} from 'react';
import {SocketContext} from "../hooks/SocketContext";

const BandAdd = () => {

    const [valor, setValor] = useState('');
    const {socket} = useContext(SocketContext);

    const onAddBand = (e) => {
        e.preventDefault()
        if (valor.trim().length > 0) {
            socket.emit('crear-banda', {nombre: valor})
            setValor('')
        }
    }
    return (
        <div>
            <h3>Agregar Banda</h3>
            <form onSubmit={onAddBand}>
                <input className={"form-control"} placeholder={"Nuevo nombre de banda"} value={valor}
                       onChange={(ev) => setValor(ev.target.value)}/>
            </form>
        </div>
    );
};

export default BandAdd;
