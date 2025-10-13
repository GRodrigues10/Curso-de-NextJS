import Topo from "@/components/Topo";
import React, { useState } from "react";
import DisplayState from "@/components/DisplayState";
function State() {
  // let contv = 0;
  const [contv, setContv] = useState<number>(0);

  return (
    <>
      <Topo />
      <div className="p-2 flex flex-col gap-2 items-center">
        <div>UseState</div>
        <DisplayState valor={contv} fState={setContv}></DisplayState>
       
      </div>
    </>
  );
}

export default State;
