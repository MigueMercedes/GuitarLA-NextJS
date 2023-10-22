import React from 'react'
import Layout from '../components/layout'
import Link from 'next/link'

export default function Error404() {
  return (
    <Layout
      title='Pagina no encontrada'
    >
      <div className='error'>
      <h1>¡Página no encontrada!</h1>
      <p>La página que buscas no existe.</p>
      <Link href="/">
        <a className='error-enlace'>
          Ir a la página de inicio
        </a>
      </Link>
    </div>
    </Layout>
  )
}
