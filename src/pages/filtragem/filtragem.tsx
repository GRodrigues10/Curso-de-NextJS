import Topo from "@/components/Topo";
import React, { useState } from "react";

function filtragem() {
  const [categ, setCateg] = useState("");
  const [linhas, setLinhas] = useState<any[]>([]);

  function criarLinhas(categ: any) {
    setCateg(categ);
    let l: any = [];
    carros.forEach((c: any) => {
      if (c.categ == categ) {
        l.push(
          <div className="flex flex-row w-[500px]" key={c.id}>
            <div className="w-full">{c.categ}</div>
            <div className="w-full">{c.valor}</div>
            <div className="w-full">{c.modelo}</div>
          </div>
        );
      }
    });
    setLinhas(l);
  }
  const carros = [
    { id: 0, categ: "Esporte", valor: 120000.0, modelo: "Golf GTI" },
    { id: 1, categ: "Esporte", valor: 120000.0, modelo: "Camaro" },
    { id: 2, categ: "SUV", valor: 100000.0, modelo: "HRV" },
    { id: 3, categ: "Utilitário", valor: 180000.0, modelo: "Hillux" },
  ];
  return (
    <div>
      <Topo />
      <label>Selecione a Categoria</label>
      <select value={categ} onChange={(e) => criarLinhas(e.target.value)}>
        <option value=""></option>
        <option value="Esporte">Esporte</option>
        <option value="SUV">SUV</option>
        <option value="Utilitário">Utilitário</option>
      </select>
      <div className="flex flex-col">
        <div className="flex flex-row w-[500px]">
          <div className="w-full">Categoria</div>
          <div className="w-full">Valor</div>
          <div className="w-full">Modelo</div>
        </div>
        {linhas}
      </div>
    </div>
  );
}

export default filtragem;
