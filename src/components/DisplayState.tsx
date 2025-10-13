import React from "react";

interface DisplayStateProps {
  valor: number;
  fState:any;
}

function DisplayState(props: DisplayStateProps) {
const operacao = (op:number) => {
  props.fState((prev:number) => prev + op);
};


  
  return (
    <div className="flex p-5 rounded-md bg-blue-300 flex-col w-[200px] gap-2 border-2 items-center">
      <div className="bg-amber-950 w-full text-center text-white rounded" >{props.valor}</div>
      <div className="flex gap-2">
        <button onClick={()=>operacao(1)} className="border rounded p-1 cursor-pointer max-w-40">
          Somar
        </button>
        <button onClick={()=>operacao(-1)} className="border rounded p-1 cursor-pointer max-w-40">
          Subtrair
        </button>
      </div>
    </div>
  );
}

export default DisplayState;
