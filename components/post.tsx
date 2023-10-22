import Image from "next/future/image";
import { DatumAttributes } from "../interfaces/posts.interface";
import Link from "next/link";
import styles from "../styles/blog.module.css";
import { formatearFecha } from "../utils/helpers";

export default function post({post}: {post: DatumAttributes}) {

  const { titulo, contenido, createdAt, url, imagen } = post;
  const imagenURL = imagen.data.attributes.url;

  return (
    <article>
      <Image src={imagenURL} alt={`Imagen del post ${titulo}`} width={600} height={400} />

      <div className={styles.contenido}>
        <div>
          <h3>{titulo}</h3>
          <p className={styles.fecha}>{formatearFecha(createdAt)}</p>
          <p className={styles.resumen}>{contenido}</p>
        </div>

        <Link href={`/blog/${url}`}>
          <a className={styles.enlace}>
            Leer el Post
          </a>
        </Link>
      </div>
      
    </article>
  )
}
