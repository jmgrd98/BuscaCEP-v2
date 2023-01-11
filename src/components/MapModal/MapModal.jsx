import { MapModalStyle } from "./style"
import { MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet'
import { useEffect } from "react"


export function hello(){
    alert('Hello!')
}

export default function MapModal({isOpen}){

// const position = [51.505, -0.09]

    return(
        <div className="modal"></div>
    //     <MapModalStyle>

    //     <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    //     <TileLayer
    //       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     />
    //     <Marker position={position}>
    //       <Popup>
    //         A pretty CSS3 popup. <br /> Easily customizable.
    //       </Popup>
    //     </Marker>
    //   </MapContainer>
        
    //     </MapModalStyle>
    )

}