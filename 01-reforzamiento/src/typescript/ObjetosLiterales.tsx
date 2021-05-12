interface Persona {
  nombre: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  casaNo: number
}

function ObjetosLiterales() {
  const persona: Persona = {
    nombre: 'Albeiro',
    edad: 31,
    direccion: {
      pais: 'Colombia',
      casaNo: 301
    }
  }

  return (
    <>
      <h3>Objectos Literales</h3>
      <code>
        <pre>
          { JSON.stringify(persona, null, 2)}
        </pre>
      </code>
    </>
  )
}

export default ObjetosLiterales;

/*
Los objectos no tienen representasion en html,
solo si utlizamos JSON.stringify(persona, ['nombre', 'direccion', 'pais'], 2)

Diferncia entre class, type, interface
class: Sirve para crear instancias
interface: Es mas facil de expandir, nos ayudan a que typescript sepa como lucen nuestros objetos, reglas de validación en objetos
tyoe: No se pueden expandir, son de tipo plano.. Lo pueden utilizar las interfaces
*/
