import { useState } from "react"
import { HeaderStyle } from "./style"



export default function Header(){

async function fetchAPI(e){
    const url = `https://viacep.com.br/ws/value/json/`
    await fetch(url.replace('value', inputText))
    .then(response => response.json())
    .then(data => console.log(data))
}

const [ceps, setCeps] = useState([])
const [inputText, setInputText] = useState('')

function handleChange(e){
    setInputText(e.target.value)
}

function handleSubmit(e){
    e.preventDefault()
    setCeps([...ceps, inputText])
    setInputText('')
    console.log(ceps)
}


    return(
    <HeaderStyle>
        <header>

        <h1>BuscaCEP</h1>

        <form onSubmit={handleSubmit} className="SearchForm">
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