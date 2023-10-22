import Image from 'next/future/image';
import Layout from '../../components/layout';
import { DatumAttributes, Posts } from '../../interfaces/posts.interface';
import styles from '../../styles/blog.module.css'
import { formatearFecha } from '../../utils/helpers';

export interface PathsI {
  params: {
    url: string;
  }
}

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/posts`);
  const { data }: Posts = await respuesta.json();

  const paths: PathsI[] = data.map( post => ({
    params: {
      url : post.attributes.url
    }
  }))

  console.log(paths)

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: {url} }: PathsI) {
  const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`);
  const { data: [{attributes: post}] }: Posts = await respuesta.json();

  return {
    props: { 
      post,
    }
  }
}


export default function PostUrl({post}: {post: DatumAttributes}) {

  const { titulo, contenido, createdAt, imagen } = post;
  const { url: imagenUrl } = imagen.data.attributes
  return (
    <Layout
      title={`Post ${titulo}`}
    >
      <article className={`${styles.post} ${styles['mt-3']}`}>
        <Image src={imagenUrl} alt={`Imagen del post ${titulo}`} width={1000} height={800} />

        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.fecha}>${formatearFecha(createdAt)}</p>
          <p className={styles.texto}>{contenido}</p>
        </div>
      </article>
    </Layout>
  )
}
