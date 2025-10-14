import Topo from '@/components/Topo'
import React, { useState, useEffect } from 'react'


function effect() {
    const [count, setCount] = useState<number>(0);
    const [aux, setAux] = useState<number>(0)

    useEffect(()=>{
        alert('useEffect disparado!')

    },[aux]);

    function add(){
        setAux(a=>a+1)
    }

  return (
    <div>
        <Topo/>
        <div>
            <p>{`Valor de Count: ${count}`}</p>
            <p>{`Valor de Aux: ${aux}`}</p>
            <button onClick={add} className='border p-1 rounded'>Adicionar</button>
        </div>
    </div>
  )
}

export default effect