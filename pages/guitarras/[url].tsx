import Image from 'next/future/image';
import { ChangeEvent, FormEvent, useState } from 'react';
import Layout from '../../components/layout';
import { GuitarraI } from '../../interfaces/guitarra.interface';
import { Datum, Guitarras } from '../../interfaces/guitarras.interface';
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
  const { data: guitarra }: Guitarras = await respuesta.json();

  return {
    props: { 
      guitarra,
    }
  }
}

interface PropsI {
  guitarra: Datum[];
  agregarCarrito: (guitarra:GuitarraI) => void;
  actualizarCantidad: (guitarra:GuitarraI) => void;
  eliminarProducto: (id: number) => void;
}

export default function GuitarraUrl({guitarra, agregarCarrito, actualizarCantidad, eliminarProducto}: PropsI) {

  const [cantidad, setCantidad] = useState(0);
  const { nombre, descripcion, precio } = guitarra[0]?.attributes;
  const { url: imagenUrl } = guitarra[0]?.attributes?.imagen?.data?.attributes

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if(cantidad < 1) {
        alert('Cantidad no válida!');
        return;
      }

      // Construir un objecto
      const guitarraSeleccionada: GuitarraI= {
        id: guitarra[0].id,
        imagen: imagenUrl,
        nombre,
        precio,
        cantidad
      }

      agregarCarrito(guitarraSeleccionada)
  }

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

          <form 
            className={styles.formulario}
            onSubmit={handleSubmit}
          >
            
            <label htmlFor="cantidad">Cantidad:</label>

            <select 
              id="cantidad"
              onChange={ (e:ChangeEvent<HTMLSelectElement>) => setCantidad(Number(e.target.value))}
            >
              <option value="0">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input 
              type="submit" 
              value="Agregar al carrito" 
            />
          </form>
        </div>
      </article>
    </Layout>
  )
}
