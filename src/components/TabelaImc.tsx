import React from "react";

interface TabelaImcProps {
  imc: number;
}

function TabelaImc({ imc }: TabelaImcProps) {
  return (
    <div className="mx-2 mb-2">
      <div className="flex border text-center font-black bg-zinc-400">
        <div className="w-1/2 border text-center font-bold">Classificação</div>
        <div className="w-1/2 border text-center font-bold">IMC</div>
      </div>

      <div className={`flex ${imc < 18.5 ? "bg-yellow-300 font-bold" : ""}`}>
        <div className="w-1/2 border">Abaixo do Peso</div>
        <div className="w-1/2 border">Abaixo de 18,5</div>
      </div>

      <div className={`flex ${imc >= 18.5 && imc <= 24.9 ? "bg-green-300 font-bold" : ""}`}>
        <div className="w-1/2 border">Peso Normal</div>
        <div className="w-1/2 border">Entre 18,5 e 24,9</div>
      </div>

      <div className={`flex ${imc >= 25 && imc <= 29.9 ? "bg-orange-300 font-bold" : ""}`}>
        <div className="w-1/2 border">Acima do Peso</div>
        <div className="w-1/2 border">Entre 25 e 29,9</div>
      </div>

      <div className={`flex ${imc >= 30 && imc <= 34.9 ? "bg-red-300 font-bold" : ""}`}>
        <div className="w-1/2 border">Obesidade grau I</div>
        <div className="w-1/2 border">Entre 30 e 34,9</div>
      </div>

      <div className={`flex ${imc >= 35 && imc <= 39.9 ? "bg-red-400 font-bold" : ""}`}>
        <div className="w-1/2 border">Obesidade grau II</div>
        <div className="w-1/2 border">Entre 35 e 39,9</div>
      </div>

      <div className={`flex ${imc >= 40 ? "bg-red-500 text-white font-bold" : ""}`}>
        <div className="w-1/2 border">Obesidade grau III</div>
        <div className="w-1/2 border">Maior que 40</div>
      </div>
    </div>
  );
}

export default TabelaImc;
