import { CardStyle } from "./style";

export default function Card({cep, endereco}){

    return(

        <CardStyle>

            <div className="cardContainer">
                <span>{cep}</span>
                <p>{endereco}</p>
            </div>


        </CardStyle>
    )
}