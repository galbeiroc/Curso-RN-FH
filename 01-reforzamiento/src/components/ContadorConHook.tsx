import useCounter from '../Hook/useCounter';

function ContadorConHook() {
  const { valor, acumular } = useCounter(100);

  return (
    <>
      <h3>ContadorConHook: <small>{valor}</small></h3>
      <button
        className="btn btn-primary" 
        onClick={() => acumular(+1)}
      >
        +1
      </button>
      <button
        className="btn btn-primary mx-3"
        onClick={() => acumular(-1)}
      >
        -1
      </button>
    </>
  )
}

export default ContadorConHook;
