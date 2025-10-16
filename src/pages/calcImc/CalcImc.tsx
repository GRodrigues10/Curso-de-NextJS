import CompForm from "@/components/CompForm";
import TabelaImc from "@/components/TabelaImc";
import React, { useState } from "react";

function CalcImc() {
  const [peso, setPeso] = useState<number>(0);
  const [altura, setAltura] = useState<number>(0);
  const [imc, setImc] = useState<number>(0);

  function calcular(){
    let res = peso / (altura * altura)
    setImc(res)
  }

  return (
    <div className="flex flex-col border border-black rounded w-[400px] gap-5">
      <h1 className="w-full text-center bg-zinc-400 font-bold text-2xl">Cálculo do IMC</h1>
      <CompForm label="peso" state={peso} funcState={setPeso} />
      <CompForm label="altura" state={altura} funcState={setAltura} />
      <button onClick={calcular} className="bg-blue-900 text-white mx-2 p-1 rounded cursor-pointer">Calcular</button>
      <p className="bg-zinc-100 p-1">Resultado:{imc.toFixed(2)}</p>
      <TabelaImc />
    </div>
  );
}

export default CalcImc;
