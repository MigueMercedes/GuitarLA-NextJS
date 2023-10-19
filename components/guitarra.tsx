import { DatumAttributes } from '../interfaces/guitarras.interface';

export default function Guitarra({guitarra}: {guitarra: DatumAttributes}) {
  console.log(guitarra);

  return (
    <div>{guitarra.nombre}</div>
  )
}
