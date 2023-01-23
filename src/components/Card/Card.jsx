import { CardStyle } from "./style";
import {FaMapMarkedAlt} from 'react-icons/fa'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Card({cep, uf, cidade, bairro, logradouro}){

function success(position){
    const crd = position.coords
    const pos = [crd.latitude, crd.longitude]

    console.log(pos)
}

navigator.geolocation.getCurrentPosition(success)
    

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

                <button onClick={success}><FaMapMarkedAlt size={25}/></button>
                </div>

<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className='mapContainer'>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      Você está aqui!
    </Popup>
  </Marker>
</MapContainer>
            </div>

            

        </CardStyle>
    )
}