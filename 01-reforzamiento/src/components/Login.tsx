import { useEffect, useReducer } from 'react'

interface AuthState {
  validando: boolean,
  token: null | string,
  username: string,
  nombre: string,
}

const initialState: AuthState = {
  validando: true,
  token: null,
  username: '',
  nombre: '',
}

type LoginPayload = {
  username: string,
  nombre: string
};

type AuthAction =
  | { type: 'logout' }
  | { type: 'login', payload: LoginPayload };

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch(action.type){
    case 'logout':
      return {
        validando: false,
        token: null,
        username: '',
        nombre: ''
      };
    case 'login':
      return {
        validando: false,
        token: 'aevc834vf',
        nombre: action.payload.nombre,
        username: action.payload.username
      }
    default:
      return state;
  }
}

function Login() {
  const [{ validando, token, username }, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout'})
    }, 1500)
  }, [])

  const login = () => {
    dispatch({
      type: 'login',
      payload: { nombre: 'Albeiro', username: 'galbeiroc'}
    })
  }

  const logout = () => {
    dispatch({ type: 'logout'})
  }


  if (validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">
          Validando..
        </div>
      </>
    )
  }

  return (
    <>
      <h3>Login</h3>
      {
        token
        ? <div className="alert alert-success">Autenticado como: {username}</div>
        : <div className="alert alert-danger">No Autenticado</div>
      }
      {
        token
        ? (
          <button onClick={logout} className="btn btn-danger">
            Logout
          </button>
        ) : (
          <button onClick={login} className="btn btn-primary">
            Login
          </button>
        )
      }
    </>
  )
}

export default Login;
