import Card from "@/components/Card";
import Topo from "@/components/Topo";
import { useRouter } from "next/router";
import React from "react";

function produtos() {
  const produtos = [
    {
      id: 1,
      produto: "Mouse",
      valor: 49.9,
      desconto: 0,
      disponivel: true,
    },

    {
      id: 2,
      produto: "Teclado",
      valor: 69.9,
      desconto: 0,
      disponivel: false,
    },

    {
      id: 3,
      produto: "Monitor",
      valor: 459.9,
      desconto: 0,
      disponivel: true,
    },

    {
      id: 4,
      produto: "CPU",
      valor: 749.9,
      desconto: 50,
      disponivel: true,
    },
    {
      id: 5,
      produto: "Caixa de Som",
      valor: 89.9,
      desconto: 0,
      disponivel: false,
    },
    {
      id: 6,
      produto: "Microfone",
      valor: 299.9,
      desconto: 10,
      disponivel: true,
    },
  ];
//   let curso = "React";

  const calcDesc = (v: number, d: number) => {
    return v - d;
  };

  const calcDesc2 = (v: number, d: number) => {
    return v - d / 2;
  };
  const router = useRouter();
//   const nome = router.query.nome;
//   const curso = router.query.curso;

const {nome, curso} = router.query;
  console.log(nome);
  console.log(curso);
  return (
    <>
      <Topo />
      <div className="flex justify-center gap-3">
        {produtos.map(
          (p: any) =>
            p.disponivel && (
              <Card key={p.id}
                produto={p.produto}
                valor={p.valor}
                desconto={p.desconto}
                funcao={calcDesc}
                disponivel={p.disponivel}

              >

                <div>Compre Agora!</div>
                <div>Vamos lá!</div>
              </Card>
            )
        )}
      </div>
    </>
  );
}

export default produtos;
