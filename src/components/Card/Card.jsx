import { CardStyle } from "./style";
import {FaMapMarkedAlt} from 'react-icons/fa'
import { hello } from "../MapModal/MapModal";
import MapModal from "../MapModal/MapModal";


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

                <button onClick={() => {setModalOpen(true)}}><FaMapMarkedAlt size={25}/></button>
                </div>
            </div>


        </CardStyle>
    )
}