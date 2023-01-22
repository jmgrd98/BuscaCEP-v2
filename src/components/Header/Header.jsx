import { HeaderStyle } from "./style"

export default function Header() {
  return (
<HeaderStyle>
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
    </HeaderStyle>
  )
}
