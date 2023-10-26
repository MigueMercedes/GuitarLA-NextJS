import { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { GuitarraI } from '../interfaces/guitarra.interface';
import '../styles/globals.css'
import Image from 'next/future/image';

function MyApp({ Component, pageProps }: AppProps) {

  const carritoLSString = typeof window !== 'undefined' ? localStorage.getItem('carrito') : undefined;
  const carritoLS:GuitarraI[] = carritoLSString ? JSON.parse(carritoLSString) : [];
  const [carrito, setCarrito] = useState<GuitarraI[]>(carritoLS ?? []);
  const [paginaLista, setPaginaLista] = useState(false);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  useEffect(() => {
    setTimeout(() => {
      setPaginaLista(true)
    }, 1000);
  }, []);

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


  return paginaLista ? (
    <Component
      {...pageProps}
      carrito={carrito}
      agregarCarrito={agregarCarrito}
      actualizarCantidad={actualizarCantidad}
      eliminarProducto={eliminarProducto}
    />
  ): (
    <div className='centered'>
      <h1 style={{marginBottom: 35}}>Loading</h1>
      <Image src={'/img/spinner.svg'} alt={'Cargando...'} width={100} height={100} />
    </div>
  )
}

export default MyApp
