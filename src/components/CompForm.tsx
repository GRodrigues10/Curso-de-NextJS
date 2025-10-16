import React from "react";

interface CompFormProps {
  label: string;
  state: any;
  funcState: any;
}

function CompForm(props: CompFormProps) {
  return (
    <div className="flex gap-2 mx-2">
      <label className="w-[60px]">{props.label}</label>
      <input
        type="text"
        value={props.state}
        onChange={(e) => props.funcState(e.target.value)}
        className="border p-2 w-full rounded"
      />
    </div>
  );
}


export default CompForm;
