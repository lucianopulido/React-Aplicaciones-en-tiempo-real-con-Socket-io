import React, {useState} from 'react';

const BandAdd = ({crearBanda}) => {

    const [valor, setValor] = useState('');

    const onAddBand = (e) => {
        e.preventDefault()
        if (valor.trim().length > 0) {
            crearBanda(valor)
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
