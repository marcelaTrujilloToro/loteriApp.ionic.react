import React from 'react'
import {Premio} from "../../models/Premio"
import "./ListaPremios.style.css"

type ListaPremioProps = {
    listaPremios: Array<Premio>
}

const ListaPremios:  React.FC <ListaPremioProps>= (props) => {
    return (
        <div>
            <ul>
                {props.listaPremios.map((premio)=> {
                    return(
                        <li className="la-premio-fuente" key={premio.codigo}>
                            {premio.descripcion} 
                            {premio.numero}
                            {premio.serie}
                            {premio.valor}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default ListaPremios;