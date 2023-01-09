import { CardStyle } from "./style";

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

                
                </div>
            </div>


        </CardStyle>
    )
}