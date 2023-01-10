import { MapStyle } from "./style";

export default function Map(){

    return(

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

        <MapStyle>
        <div>Hello!</div>
        </MapStyle>

    </div>
    )
}