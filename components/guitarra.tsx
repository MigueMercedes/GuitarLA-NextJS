import Image from 'next/future/image';
import { DatumAttributes } from '../interfaces/guitarras.interface';
import Link from 'next/link';
import styles from '../styles/guitarras.module.css'

export default function Guitarra({guitarra}: {guitarra: DatumAttributes}) {
  
  const { nombre, precio, descripcion, url } = guitarra;
  const imagen = guitarra.imagen.data.attributes.formats.medium.url;

  return (
    <div className={styles.guitarra}>
      <Image src={imagen} alt={`Imagen de guitarra${nombre}`} width={600} height={400}/>

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link href={`/guitarras/${url}`}>
          <a className={styles.enlace}>
            Ver Producto
          </a>
        </Link>
      </div>
    </div>
  )
}
