import { useRef, useState, useEffect } from 'react'
import { reqResApi } from '../api/reqres';
import { ResReqListado, Usuario } from '../interfaces/reqRes.interface';

function useUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const paginaRef = useRef(1)

  async function cargarUsuarios() {
    const respose = await reqResApi.get<ResReqListado>('/users', {
      params: {
        page: paginaRef.current
      }
    });
    if (respose.data.data.length > 0) {
      setUsuarios(respose.data.data);
    } else {
      paginaRef.current --;
      alert('No hay más registros');
    }
    
  };

  useEffect(() => {
    cargarUsuarios();
  }, [])

  function paginaSiguiente() {
    paginaRef.current ++;
    cargarUsuarios();
  }

  function paginaAnterior() {
    if (paginaRef.current > 1) {
      paginaRef.current --;
      cargarUsuarios();
    } else {
      alert('No hay más registros ant');
    }
  }

  return { usuarios, paginaSiguiente, paginaAnterior }
}

export default useUsuarios;
