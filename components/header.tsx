import Image from 'next/future/image'
import Link from 'next/link'
import styles from '../styles/header.module.css'
import { useRouter } from 'next/router'

export default function Header() {

  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>

        <Link href={'/'}>
          <a>
            <Image src={'/img/logo.svg'} alt={'imagen logo'} width={300} height={40} />
          </a>
        </Link>

        <nav className={'navegacion'}>

          <Link href={'/'}>
            <a className={ router.pathname === '/' ? 'active' : '' }>
              Inicio
            </a>
          </Link>

          <Link href={'/tienda'}>
            <a className={ router.pathname === '/tienda' ? 'active' : '' }>
              Tienda
            </a>
          </Link>

          <Link href={'/nosotros'}>
            <a className={ router.pathname === '/nosotros' ? 'active' : '' }>
              Nosotros
            </a>
          </Link>

          <Link href={'/blog'}>
            <a className={ router.pathname === '/blog' ? 'active' : '' }>
              Blog
            </a>
          </Link>

          <Link href={'/carrito'}>
            <a>
              <Image src={'/img/carrito.png'} alt={'imagen carrito'} width={30} height={25} />
            </a>
          </Link>

        </nav>
      </div>
    </header>
  )
}
