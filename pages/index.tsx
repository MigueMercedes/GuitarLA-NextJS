import Curso from "../components/curso";
import Guitarra from "../components/guitarra";
import Layout from "../components/layout";
import Post from "../components/post";
import { Curso as CursoI, CursoData } from "../interfaces/curso.interface";
import { Guitarras as GuitarrasI, Datum as DatumGuitarras } from "../interfaces/guitarras.interface";
import { Posts as PostsI, Datum as DatumPosts } from '../interfaces/posts.interface';
import styles from "../styles/grid.module.css"

export interface PathsI {
  params: {
    url: string;
  }
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`;
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`;
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`;

  const [ respGuitarras, respPosts, respCurso ] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso)
  ]);

  const [ { data: guitarras }, { data: posts }, { data: curso } ]: [ GuitarrasI, PostsI, CursoI ] = await Promise.all([
    respGuitarras.json(),
    respPosts.json(),
    respCurso.json()
  ]);

  return {
    props: {
      guitarras,
      posts,
      curso
    }
  }
}

export default function Home({guitarras, posts, curso}: {guitarras: DatumGuitarras[], posts: DatumPosts[], curso: CursoData}) {
  return (
    <>
      <Layout 
        title={'Inicio'}  
        description={'Blog de música, venta de guitarras y más.'}      
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra Colección</h1>

          <div className={styles.grid}>
            {guitarras?.map( guitarra => (
              <Guitarra 
                key={guitarra.id}
                guitarra={guitarra?.attributes}
              />
            ))}
          </div>
        </main>

        <Curso
          curso={curso?.attributes}
        />

        <section className="contenedor">
          <h1 className="heading">Blog</h1>

          <div className={styles.grid}>
            {posts.map( post => (
              <Post 
                key={post.id}
                post={post?.attributes}
              />
            ))}
          </div>
        </section>

      </Layout>
    </>
  )
}


