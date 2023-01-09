import { CardStyle } from "./style";
import {FaMapMarkedAlt} from 'react-icons/fa'

export default function Card({cep, uf, cidade, bairro, logradouro}){

    return(

        <CardStyle>

            <div className="cardContainer">
                <div className="cardHeader">
                <span>{cep}</span>
                </div>

                <div className="cardBody">
                <p>{cidade}/{uf}</p>
                <p>{bairro}</p>
                <p>{logradouro}</p>

                <button><FaMapMarkedAlt size={25}/></button>
                </div>
            </div>


        </CardStyle>
    )
}