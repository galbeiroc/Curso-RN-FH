import useUsuarios from '../Hook/useUsuarios';
import { Usuario } from '../interfaces/reqRes.interface';

function Usuarios() {
  const { usuarios, paginaAnterior, paginaSiguiente } = useUsuarios();
 
  function renderUsuario({ id, avatar, first_name, last_name, email }: Usuario) {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            style={{ width: '50px', height: '50px' }}
            className="rounded-circle sm" 
            src={avatar} alt="Avatar"/>
        </td>
        <td>{first_name} {last_name}</td>
        <td>{email}</td>
      </tr>
    )
  };

  return (
    <>
      <h3>Usuarios: </h3>
      <table className="table" style={{ textAlign: 'center' }}>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            usuarios.map(renderUsuario)
          }
        </tbody>
      </table>
      <button onClick={() => paginaAnterior()} className="btn btn-primary">
        Anterior
      </button>
      <button onClick={() => paginaSiguiente()} className="btn btn-primary mx-5">
        Siguiente
      </button>
    </>
  )
}

export default Usuarios
