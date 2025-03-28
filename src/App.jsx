import { useState } from "react";

function App() {

  const [nome, setNome] = useState("Fernandes")

  // var nome = "Pelinson";

  return (
    <div>
      <h3>Pizzaria 2F</h3>
      <input 
        className="nome"
        name = "nome"
        onChange={(e)=>{setnome(e.currentTarget.value)}}
        placeholder="Digite um nome..."
        type="text"/>
      <button 
       ClassName="botao"
      onClick={()=>{alert(nome)}}>
        CLIQUE AQUI
      </button>
    </div>
  )
}

export default App