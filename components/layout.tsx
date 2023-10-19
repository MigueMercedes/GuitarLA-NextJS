import Head from "next/head"
import Header from "./header"
import Footer from "./footer"


export default function Layout({children, title = '', description = ''}) {
  return (
    <div className="layout-container">
      {/* meta */}
      <Head>
        <title>{`GuitarLA - ${title}`}</title>
      </Head>
      
      {/* body */}
      <Header />

      <div className="">
        {children}
      </div>

      <Footer /> 
    </div>
  )
}
