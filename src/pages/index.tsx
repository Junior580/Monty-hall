import Cartao from '@/components/Cartao'
import EntradaNumerica from '@/components/EntradaNumerica'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Formulario.module.css'

export default function Formulario() {
  const [qtdPortas, setQtdPortas] = useState(3)
  const [comPresente, setcomPresente] = useState(1)

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor='#c0392c'>
          <h1>Monty hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica
            text='Qtd Portas?'
            value={qtdPortas}
            onChange={novaQtd => setQtdPortas(novaQtd)}
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
          {' '}
          <EntradaNumerica
            text='Porta com presente?'
            value={comPresente}
            onChange={novaPortaComPresente =>
              setcomPresente(novaPortaComPresente)
            }
          />
        </Cartao>
        <Cartao bgcolor='#29a085'>
          <Link href={`/jogo/${qtdPortas}/${comPresente}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
