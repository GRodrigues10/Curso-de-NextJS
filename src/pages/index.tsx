// import Image from "next/image";
import { useState } from "react";
import Topo from "@/components/Topo";

export default function Home() {
  // const nome = "Duke";
  let canal = "CFBCursos";
  // // const change = () => {
  // //   setNome('Jorge')
  // // }

  // //  const change2 = () => {
  // //   setNome('Jorge')
  // // }

  

  return (
    <>
      <div>
        <Topo />
        <div style={teste}>
          <main className="flex justify-center">
            <div>Curso de React Next</div>
            <div>Typescript</div>
            <div style={{ color: "red", backgroundColor: "gray" }}>React</div>
          </main>
        </div>
      </div>
    </>
  );
}

const teste = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#00f",
  backgroundColor: "#eee",
  fontSize: "20px",
};
