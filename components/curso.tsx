import React from 'react'
import { PurpleAttributes } from '../interfaces/curso.interface'
import styles from '../styles/curso.module.css'

export default function Curso({curso}: {curso: PurpleAttributes}) {

  const { titulo, contenido, imagen } = curso;
  const imagenUrl = imagen.data.attributes.url
  return (
    <section 
      className={`${styles.curso}`} 
      style={{
        backgroundImage: `linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagenUrl})`
      }}
    >
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className='heading'>{titulo}</h2>
          <p>{contenido}</p>
        </div>
      </div>
    </section>
  )
}
