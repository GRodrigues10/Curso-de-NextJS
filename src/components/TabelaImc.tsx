import React from "react";

function TabelaImc() {
  return (
    <div className="mx-2 mb-2">
      <div className="flex">
        <div className="w-1/2 border text-center font-bold">Classificação</div>
        <div className="w-1/2 border text-center font-bold">IMC</div>
      </div>

      <div className="flex">
        <div className="w-1/2 border">Abaixo do Peso</div>
        <div className="w-1/2 border">Abaixo de 18,5</div>
      </div>

      <div className="flex">
        <div className="w-1/2 border">Peso Normal</div>
        <div className="w-1/2 border">Entre 18,5 e 24,9</div>
      </div>

      <div className="flex">
        <div className="w-1/2 border">Acima do Peso</div>
        <div className="w-1/2 border">Entre de 25 e 29,9</div>
      </div>
      <div className="flex">
        <div className="w-1/2 border">Obesidade grau I</div>
        <div className="w-1/2 border">Entre de 30 e 34,9</div>
      </div>
      <div className="flex">
        <div className="w-1/2 border">Obesidade grau II</div>
        <div className="w-1/2 border">Entre de 35 e 39,9</div>
      </div>
      <div className="flex">
        <div className="w-1/2 border">Obesidade grau III</div>
        <div className="w-1/2 border">Maior que 40</div>
      </div>
    </div>
  );
}

export default TabelaImc;
