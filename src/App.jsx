
import './App.css'
import SearchAppBar from './components/SearchAppBar/SearchAppBar'
import BasicModal from './components/BasicModal/BasicModal'

function App() {

const url = `https://viacep.com.br/ws/value/json/`

async function fetchAPI(cep){
  if(cep.length < 7){
    table.innerHTML = "Insira o CEP!"
  }
  else{
    await fetch(url.replace('value', cep))
    .then(res => res.json())
    .then(data => table.innerHTML = `
    <table>
      <tr>
       <th>CEP:</th>
       <td>${data.cep}</td>
      </tr>
      <tr>
       <th>Endereço:</th>
       <td>${data.logradouro}</td>
      </tr>
      <tr>
       <th>Bairro:</th>
       <td>${data.bairro}</td>
      </tr>
      <tr>
       <th>Cidade/Estado:</th>
       <td>${data.localidade}/${data.uf}</td>
      </tr>
    </table>`)
      .catch((err) => console.log(err))
  }}

  return (
    <div className="App">
      <SearchAppBar/>
        
    <BasicModal/>
    
   

    </div>
  )
}

export default App
