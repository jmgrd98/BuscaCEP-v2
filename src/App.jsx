import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {

const [ceps, setCeps] = useState([])
const [inputText, setInputText] = useState('')

  function handleChange(e){
    setInputText(e.target.value)
}

function handleSubmit(e){
    e.preventDefault()
    fetchAPI(url)
    setCeps([...ceps, inputText])
    setInputText('')
    console.log(...ceps)
}

async function fetchAPI(e){ 
  e.preventDefault() 
  await fetch(`https://viacep.com.br/ws/${inputText}/json/`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch((error) => console.log(error))

    setCeps([...ceps, inputText])
    setInputText('')
}

  return (
    <div className="App">

      <header>

        <h1>BuscaCEP</h1>

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
        <p>Insira um CEP!</p>

        {ceps.map(cep => {
          return(
            <Card
            key={cep} 
            cep={cep}
            endereco={cep}/>
          )
        })}
      </main>
    </div>
  )
}

export default App
