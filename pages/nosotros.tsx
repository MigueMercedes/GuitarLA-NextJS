import Link from "next/link";
import Layout from "../components/layout";

export default function Nosotros() {
  return (
    <>
      <Layout 
        title={'Nosotros'} 
        description={'Sobre nosotros, guitarLa, tienda de música.'}
      >
        <h1>Nosotros</h1>

        <Link href={'/'}>Inicio</Link>
      </Layout>
    </>
  )
}
