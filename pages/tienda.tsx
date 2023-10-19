import Guitarra from "../components/guitarra";
import Layout from "../components/layout";
import { Guitarras } from "../interfaces/guitarras.interface";

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
  const data: Guitarras = await respuesta.json();

  return {
    props: {
      data
    }
  }
}

export default function Tienda({data}: Guitarras) {

  console.log(data)

  return (
    <>
      <Layout 
        title={'Tienda'} 
        description={'Tienda, venta de guitarras, instrumentos, GuitarLA.'}
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra Colección</h1>

          {data.map( guitarra => (
            <Guitarra 
              key={guitarra.id}
              guitarra={guitarra.attributes}
            />
          ))}
        </main>

      </Layout>
    </>
  )
}
