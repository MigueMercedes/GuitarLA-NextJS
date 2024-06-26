import Layout from "../components/layout";
import Post from "../components/post";
import { Datum, Posts } from "../interfaces/posts.interface";
import styles from "../styles/grid.module.css"
export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
  const { data: posts }: Posts = await respuesta.json();
  console.log(posts)

  return {
    props: {
      posts
    }
  }
}

export default function Blog({posts}: { posts: Datum[]}) {
  return (
    <>
      <Layout 
        title={'Blog'} 
        description={'Blog de música, venta de guitarras, consejos, GuitarLA.'}
      >
        <main className="contenedor">
          <h1 className="heading">Blog</h1>

          <div className={styles.grid}>
            {posts.map( post => (
              <Post 
                key={post.id}
                post={post.attributes}
              />
            ))}
          </div>
        </main>

      </Layout>
    </>
  )
}
