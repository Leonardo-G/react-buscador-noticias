import React from 'react'
import { Noticia } from './Noticia';
import PropTypes from "prop-types";

export const Listado = ({noticias}) => {
    return (
        <div className="row">
            {
                noticias.length !== 0 &&
                    noticias.map(noticia => (
                    <Noticia key={noticia.url} noticia={noticia}/>
            ))}
        </div>
    )
}

Listado.propTypes = {
    noticias: PropTypes.array.isRequired
}
