import Head from "next/head"


export default function Layout({children, title = '', description = ''}) {
  return (
    <>
      <Head>
        <title>{`GuitarLA - ${title}`}</title>

      </Head>
      <h1>Desde Layout</h1>
      {children} 
    </>
  )
}
