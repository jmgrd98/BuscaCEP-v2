import { useState } from "react"
import { HeaderStyle } from "./style"

const url = `https://viacep.com.br/ws/value/json/`

async function fetchAPI(e){
    fetch(url.replace('value', ))
}
    


export default function Header(){

const [ceps, setCeps] = useState([])

function handleChange(e){
    setCeps(e.target.value)

}

function handleSubmit(e){
    e.preventDefault()
    console.log(ceps)
}


    return(
    <HeaderStyle>
        <header>

        <h1>BuscaCEP</h1>

        <form onSubmit={handleSubmit} className="SearchForm">
            <input
            onChange={handleChange}
            // value={inputText}
            type="text"
            placeholder="Pesquise um CEP"
            />
            <button type="submit">Buscar</button>
        </form>
        </header>
    </HeaderStyle>
    )
}