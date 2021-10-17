import React from 'react';
import { useSelect } from '../hooks/useSelect';
import styles from "./Formulario.module.css";
import PropTypes from "prop-types";

export const Formulario = ({setCategoria}) => {

    //opciones de la documentacion de la api.
    const OPCIONES = [
        {value: "general", label: "General"},
        {value: "business", label: "Negocios"},
        {value: "entertainment", label: "Entretenimiento"},
        {value: "health", label: "Salud"},
        {value: "science", label: "Ciencia"},
        {value: "sports", label: "Deportes"},
        {value: "technology", label: "Tecnologia"},
    ]

    //Utilizar custom hook
    const [ categoria, SelectNoticias ] = useSelect("general", OPCIONES);

    //Submit al form, pasar categoria a app.js
    const buscarNoticias = e => {
        e.preventDefault()

        setCategoria(categoria);
    }

    return (
        <div className={`row ${styles.buscador}`}>
            <div className="col s1 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra noticias por categoria</h2>
                    <SelectNoticias />
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`${styles["btn-block"]} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

Formulario.propTypes = {
    setCategoria: PropTypes.func.isRequired
}


