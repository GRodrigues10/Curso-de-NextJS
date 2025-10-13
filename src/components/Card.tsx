import React from "react";

type CardProps = {
  produto: string;
  valor: number;
  desconto: number;
  disponivel:boolean;
  funcao: any;
  children:any;
};

function Card(props: CardProps) {
  return (
    <div
      className={`flex flex-col border-4 ${
        props.desconto > 0 ? " border-red-700" : "border-blue-700"
      } rounded p-3 mt-3 cursor-pointer`}
    >
      <p>Produto: {props.produto}</p>
      <p>Valor: {props.valor}</p>
      {props.desconto > 0 && (
        <div>
          <p>Desconto: {props.desconto}</p>
          <p>
            Preço final: {props.funcao(props.valor, props.desconto).toFixed(2)}
          </p>
          <p>Disponível: {props.disponivel}</p>
        </div>
      )}
      <div>{props.children}</div>
    </div>
    
  );
}

export default Card;
