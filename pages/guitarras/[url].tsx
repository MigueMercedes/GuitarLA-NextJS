import Image from 'next/future/image';
import Layout from '../../components/layout';
import { DatumAttributes, Guitarras } from '../../interfaces/guitarras.interface';
import styles from '../../styles/guitarras.module.css';

export interface PathsI {
  params: {
    url: string;
  }
}

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
  const { data }: Guitarras = await respuesta.json();

  const paths: PathsI[] = data.map( guitarra => ({
    params: {
      url : guitarra.attributes.url
    }
  }))

  console.log(paths)

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: {url} }: PathsI) {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
  const { data: [{attributes: guitarra}] }: Guitarras = await respuesta.json();

  return {
    props: { 
      guitarra,
    }
  }
}


export default function GuitarraUrl({guitarra}: {guitarra: DatumAttributes}) {

  const { nombre, descripcion, precio } = guitarra;
  const { url: imagenUrl } = guitarra.imagen.data.attributes
  return (
    <Layout
      title={`Guitarra ${nombre}`}
    >
      <article className={styles.guitarra}>
        <Image src={imagenUrl} alt={`Imagen de guitarra${nombre}`} width={600} height={400} />

        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>
        </div>
      </article>
    </Layout>
  )
}
