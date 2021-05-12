import useForm from '../Hook/useForm'

function Formularios() {
  const { email, password, onChange, form } = useForm({ email: '', password: ''});

  return (
    <>
      <h3>Formularios</h3>
      <input 
        type="text"
        className="form-control my-2"
        placeholder="email" 
        value={email}
        onChange={({ target: { value }}) => onChange(value, 'email')}
      />
      <input
        type="password" 
        className="form-control"
        placeholder="password"
        value={password}
        onChange={({ target: { value }}) => onChange(value, 'password')}
      />
      <pre>
        {JSON.stringify(form, null, 2)}
      </pre>
    </>
  )
}

export default Formularios
