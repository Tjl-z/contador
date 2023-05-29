import { useState } from "react"
import styles from './button.module.css'

export default function MeuContador() {

  console.log('renderizando contador...')
  const [contador, setContador] = useState(0)

 
  function aumentar() {
    setContador(contador + 1)
  }

  function diminuir() {
    setContador(contador - 1)
  }

  return (
    <div className="container">
      <h1>Meu Contador</h1>
      <h3>{contador}</h3>

      <div className="button">
      <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
      <button className={styles.myButton} onClick={diminuir}>Diminuir</button>
      </div>

    </div>
  )
}