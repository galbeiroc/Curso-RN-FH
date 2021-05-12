function Funciones() {
  function sumar(a: number, b: number): number {
    return a + b;
  }

  return (
    <>
      <h3>Funciones</h3>
      <span>El resultado es: {sumar(10, 9)}</span>
    </>
  )
}

export default Funciones;
