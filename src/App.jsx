import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header'

function App() {

  const [cards, setCards] = useState([
    {
      id: 1,
      cep: `dasdsa`,
      endereco: 'adsad'
    }
  ])

  return (
    <div className="App">
      <Header></Header>

      <main>
        <p>Insira um CEP!</p>

        {cards.map(card => {
          return(
            <Card
            key={card.id}
            cep={card.cep}
            endereco={card.endereco}/>
          )
        })}
      </main>
    </div>
  )
}

export default App
