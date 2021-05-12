import { useState } from 'react'

function useForm<T extends Object>(form: T) {
  const [state, setState] = useState(form);

  function onChange(value: string, campo: keyof T) {
    setState({
      ...state,
      [campo]: value
    });
  }

  return {
    ...state,
    onChange,
    form: state,
  }
}

export default useForm;

/*
Generico tipo T que extiende de un objeto
keyof T => Valida la propiedad del objecto T
*/
