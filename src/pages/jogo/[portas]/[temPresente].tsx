import Porta from '@/components/Porta'
import { useEffect, useState } from 'react'
import { atualizarPortas, criarPortas } from '@/functions/portas'
import styles from '../../../styles/Jogo.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function jogo() {
  //router responsavel por pegar os parametros enviados atraves da url
  const router = useRouter()

  const [valido, setvalido] = useState(false)
  const [portas, setPortas] = useState([])

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
    console.log(portas)

    const qtdePortasValidas = portas >= 3 && portas <= 100
    const temPresenteValido = temPresente >= 1 && temPresente <= portas
    setvalido(qtdePortasValidas && temPresenteValido)
  }, [portas])

  //useEffect: atualiza o componente "setPortas" quando o componente router pega os parametros de rota

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente

    setPortas(criarPortas(portas, temPresente))
  }, [router?.query])

  function renderizarPortas() {
    return portas.map(porta => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={novaPorta => {
            setPortas(atualizarPortas(portas, novaPorta))
          }}
        />
      )
    })
  }
  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {valido ? renderizarPortas() : <h2>Informacoes invalidas</h2>}
      </div>
      <div className={styles.botoes}>
        <Link href={'/'}>
          <button>Reiniciar jogo</button>
        </Link>
      </div>
    </div>
  )
}
