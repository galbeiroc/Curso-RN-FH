function TiposBasicos() {
  const nombre: string = 'Albeiro';
  const edad: number = 31;
  const estaActivo: boolean = true;

  const poderes: string[] = ['Velocidad', 'Volar', 'Visión Nocturna']

  return (
    <>
      <h3>Tipos Basicos</h3>
      {nombre} - {edad} - {estaActivo ? 'Activo' : 'No activo'}
      { poderes.join(', ')}
    </>
  )
}

export default TiposBasicos;

/* 
Permiten controlar en que la información establecida o como puede cambiar:
Los boolean no tienen representasion en html
const poderes string[] = [];
const poderes boolean[] = [];
const poderes number[] = [];
const poderes any[] = [];
*/
