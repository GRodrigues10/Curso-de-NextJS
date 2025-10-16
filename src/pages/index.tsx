import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import CalcImc from "./calcImc/CalcImc";
import { useState } from "react";



export default function Home() {
 
  return (
    <div className="flex w-full h-screen justify-start items-start">
      <CalcImc/>
    </div>
  );
}
