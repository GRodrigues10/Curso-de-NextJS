import React from "react";
import styles from "@/styles/topo.module.css";
import Link from "next/link";

function Topo() {
  return (
    <div className="flex justify-between p-5 items-center text-amber-50 bg-amber-950 h-[100px]">
      <div>Logo</div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl">Gabriel</div>
        <div className={styles.subtitleTopo}>Curso de React</div>
      </div>
      <nav className="flex gap-2">
        <Link href={"/"}>Home</Link>
        <Link href={{
          pathname:"/produtos/produtos",
          query:{nome:'Gabriel', curso:'React Next'}
          
        }}>Produtos</Link>
        <Link href={"/teste/teste"}>Teste</Link>
        <Link href={"/useState/useState"}>UseState</Link>
        <Link href={"/useEffect/useEffect"}>UseEffect</Link>
        <Link href={"/inputs/inputs"}>Inputs</Link>
      </nav>
    </div>
  );
}

export default Topo;
