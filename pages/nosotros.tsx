import Image from "next/future/image";
import Layout from "../components/layout";
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <>
      <Layout 
        title={'Nosotros'} 
        description={'Sobre nosotros, guitarLa, tienda de música.'}
      >
        <main className="contenedor">
          <h1 className="heading">Nosotros</h1>

          <div className={styles.contenido}>
            <Image src={"/img/nosotros.jpg"} alt={"Imagen sobre nosotros"} width={1000} height={800} />

            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper
                lobortis blandit. Cras imperdiet fermentum leo, a fringilla mi dictum et. 
                Ut augue lacus, varius id felis a, mollis pulvinar velit. In vestibulum tortor 
                gravida quam convallis scelerisque. Aenean sagittis tortor id massa maximus, quis 
                scelerisque arcu porta. Praesent id nisi blandit, feugiat diam sit amet, volutpat 
                tortor. Integer in vulputate urna, sit amet tincidunt mi. Morbi volutpat ac leo at
                consectetur. 
              </p>

              <p>
                Sed risus nisl, imperdiet a lorem eget, interdum venenatis turpis. In a pulvinar 
                erat, eget bibendum ipsum. Nam eget nisl id nulla accumsan molestie. Aenean a turpis mi. 
                Sed malesuada sem vitae sapien elementum rhoncus. Nam tempus, sapien eu sollicitudin aliquet,
                neque elit rutrum odio, at auctor velit sem quis nunc. 
              </p>
            </div>
          </div>
        </main>


      </Layout>
    </>
  )
}
