import Image from "next/future/image";
import { ChangeEvent, useEffect, useState } from "react";
import Layout from "../components/layout";
import { GuitarraI } from "../interfaces/guitarra.interface";
import styles from "../styles/carrito.module.css";

interface PropsI {
  carrito: GuitarraI[];
  agregarCarrito: (guitarra:GuitarraI) => void;
  actualizarCantidad: (guitarra?:GuitarraI) => void;
  eliminarProducto: (id: number) => void;
}

export default function Carrito({carrito, actualizarCantidad, eliminarProducto}: PropsI) {

  const [total, setTotal] = useState(0)

  useEffect(() => {
    let total = 0
    carrito.forEach((producto) => total += (producto.cantidad * producto.precio))
    setTotal(total)
  }, [carrito]);

  return (
    <Layout title="Carrito de compras">
      <main className="contenedor">
        <h1 className="heading">Carrito</h1>

        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Artículos</h2>

            {carrito?.length === 0
              ? 'Carrito Vació'
              : carrito?.map((producto) => (
                  <div key={producto.id} className={styles.producto}>
                    <div>
                      <Image
                        src={producto.imagen}
                        alt={producto.nombre}
                        width={250}
                        height={480}
                      />
                    </div>

                    <div>
                      <p className={styles.nombre}>{producto.nombre}</p>

                      <div className={styles.cantidad}>
                        <p>Cantidad:</p>
                        <select
                          className={styles.select}
                          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                            actualizarCantidad({
                              ...producto,
                              id: producto.id,
                              cantidad: Number(e.target.value),
                            })
                          }
                          value={producto.cantidad}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>

                      <p className={styles.precio}>$ {producto.precio}</p>
                      <p className={styles.subtotal}>
                        Subtotal: $
                        <span>{producto.cantidad * producto.precio}</span>
                      </p>
                    </div>

                    <button
                      className={styles.eliminar}
                      type="button"
                      onClick={() => eliminarProducto(producto.id)}
                    >
                      X
                    </button>

                  </div>
                ))}
          </div>

          <aside className={styles.resumen}>
            <h3>Resumen del Pedido</h3>
            <p>Total a pagar: ${total}</p>
          </aside>

        </div>
      </main>
    </Layout>
  )
}