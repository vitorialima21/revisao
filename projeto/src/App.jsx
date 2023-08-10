import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header> 
      <h1>Login</h1>
      </header>

      <main>
        <form action="">
          <div>
            <label htmlFor="usuário">Usuário</label>
            <input type="text" id="usuário" placeholder='Digite seu usuário' />
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <input type="password" id='senha' placeholder='Digite sua senha'/>
          </div>
          <button>Entrar</button>
        </form>
      </main>
    </>
  )
}

export default App
