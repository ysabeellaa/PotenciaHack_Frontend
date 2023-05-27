import React from 'react'
import Button from '../Button/Button'
import styles from './TrilhaCard.module.scss'



export default function TrilhaCard(props) {
  
  return (
    <div className={styles.container}>
      <img src={props.imagem} alt="" />
      <div className={styles.div_direita}>
        <h1>{props.titulo_trilha}</h1>
        <p>{props.paragrafo_trilha}</p>
        <Button estilo="buttonTrilha" title="Inscreva-se" />
      </div>
    </div>
  )
}
