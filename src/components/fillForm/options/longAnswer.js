import React from "react";

export default function LongAnswer({ response, setResponse, i }) {
  const on_change = (e) => {
    var new_res = Array.from(response);
    if (e.target.value) {
      new_res[i] = e.target.value;
    } else {
      new_res[i] = null;
    }
    setResponse(new_res);
  };
  return (
    <div>
      <div className="flex">
        <textarea
          className="flex-1 md:m-10 text-xl border border-slate-800 p-2 text-slate-800 rounded-lg focus:drop-shadow-lg h-fit"
          placeholder="Long answer..."
          value={response[i]}
          onChange={on_change}
        />
      </div>
    </div>
  );
}