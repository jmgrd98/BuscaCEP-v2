import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import {FaMapMarkerAlt} from 'react-icons/fa'
import MapModal from './components/MapModal/MapModal'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function App() {

const [ceps, setCeps] = useState([])
const [ufs, setUfs] = useState([])
const [cidades, setCidades] = useState([])
const [bairros, setBairros] = useState([])
const [logradouros, setLogradouros] = useState([])
const [inputText, setInputText] = useState('')

  function handleChange(e){
    setInputText(e.target.value)
}

async function fetchAPI(e){ 
  e.preventDefault() 
  await fetch(`https://viacep.com.br/ws/${inputText}/json/`)
  .then(response => response.json())
  .then(data => {
    setCeps([...ceps, data.cep])
    setUfs([...ufs, data.uf])
    setCidades([...cidades, data.localidade])
    setBairros([...bairros, data.bairro])
    setLogradouros([...logradouros, data.logradouro])
    setInputText('')
    console.log(navigator.geolocation.getCurrentPosition())
  })
  .catch((error) => console.log(error))
}

  return (
    <div className="App">

      <header>

      <div className="logo">
        <FaMapMarkerAlt size={50}/>
        <h1>BuscaCEP</h1>
        </div>

        <form onSubmit={fetchAPI} className="SearchForm">
            <input
            onChange={handleChange}
            value={inputText}
            type="text"
            placeholder="Pesquise um CEP"
            />
            <button type="submit">Buscar</button>
        </form>
        </header>

      <main>
        {ceps.length == 0 && <p style={{fontWeight: 'bold'}}>Insira um CEP!</p>}

        {ceps.map((cep, index) => {
          return(
            <Card
            key={cep} 
            cep={cep}
            uf={ufs[index]}
            cidade={cidades[index]}
            logradouro={logradouros[index]}
            bairro={bairros[index]}/>
          )
        })}

    {/* <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer> */}

        {/* <MapModal></MapModal> */}
      </main>
    </div>
  )
}

export default App
