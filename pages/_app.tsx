import { AppProps } from 'next/app'
import '../styles/globals.css'
import { useState } from 'react'
import { GuitarraI } from '../interfaces/guitarra.interface'

function MyApp({ Component, pageProps }: AppProps) {

  const [carrito, setCarrito] = useState<GuitarraI[]>([])

  const agregarCarrito = (guitarra: GuitarraI) => {
    // Comprobar si la guitarra ya está en el carrito...
    if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
      // Iterar para actualizar la cantidad
      const carritoActualizado = carrito.map((guitarraState) => {
        if (guitarraState.id === guitarra.id) {
          guitarraState.cantidad = guitarra.cantidad;
        }
        return guitarraState;
      });
      // Se asigna al array
      setCarrito([...carritoActualizado]);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    } else {
      // En caso de que el artículo no exista, es nuevo y se agrega
      setCarrito([...carrito, guitarra]);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }
  };
  
  const eliminarProducto = (id: number) => {
    const carritoActualizado = carrito.filter((producto) => producto.id !== id);
    setCarrito(carritoActualizado);
    window.localStorage.setItem('carrito', JSON.stringify(carrito));
  };
  
  const actualizarCantidad = (guitarra: GuitarraI) => {
    const carritoActualizado = carrito.map((guitarraState) => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.cantidad = parseInt(guitarra.cantidad.toString(), 10);
      }
      return guitarraState;
    });
    setCarrito(carritoActualizado);
    window.localStorage.setItem('carrito', JSON.stringify(carrito));
  };


  return (
    <Component
      {...pageProps}
      carrito={carrito}
      agregarCarrito={agregarCarrito}
      actualizarCantidad={actualizarCantidad}
      eliminarProducto={eliminarProducto}
    />
  )
}

export default MyApp
