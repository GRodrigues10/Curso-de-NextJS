import Topo from "@/components/Topo";
import React, { useState } from "react";

const cursos = ["", "HTML", "CSS", "JavaScript", "TypeScript", "Next.js"];
const jcursos = [{"curso":""}, {"curso":"HTML"}, {"curso":"CSS"}, {"curso":"JavaScript"}, {"curso":"TypeScript"}, {"curso":"Next.js"}];

function inputs() {
  const [nome, setNome] = useState<string>("");
  const [curso, setCurso] = useState<string>("");

  function fcursos(){
    return cursos.map((c) => {
            return <option value={c}>{c}</option>;
          })
  }
const ccursos = jcursos.map((c) => {
            return <option value={c.curso}>{c.curso}</option>;
          })
  return (
    <div>
      <Topo />
      <div className="campo_form">
        <label>Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className="campo_form">
        <label>Curso</label>
        <select value={curso} onChange={(e) => setCurso(e.target.value)}>
            {ccursos}
        </select>
      </div>

      <div className="p-2">
        <div>Nome Digitado: {nome}</div>
        <div>Curso Escolhido: {curso}</div>
      </div>
    </div>
  );
}

export default inputs;
