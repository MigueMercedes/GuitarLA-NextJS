import Guitarra from "../components/guitarra";
import Layout from "../components/layout";
import { Datum, Guitarras } from "../interfaces/guitarras.interface";
import styles from "../styles/grid.module.css"

// export async function getStaticProps() {
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
//   const { data: guitarras }: Guitarras = await respuesta.json();

//   return {
//     props: {
//       guitarras
//     }
//   }
// }

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const { data: guitarras }: Guitarras = await respuesta.json();

  return {
    props: {
      guitarras
    }
  }
}

export default function Tienda( {guitarras}: {guitarras: Datum[]}) {

  return (
    <Layout 
      title={'Tienda'} 
      description={'Tienda, venta de guitarras, instrumentos, GuitarLA.'}
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>

        <div className={styles.grid}>
          {guitarras?.map( guitarra => (
            <Guitarra 
              key={guitarra.id}
              guitarra={guitarra.attributes}
            />
          ))}
        </div>
      </main>

    </Layout>
  )
}
