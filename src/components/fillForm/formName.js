import React from "react";

export default function FormName(props) {
  return (
    <div className="bg-white border-2 border-slate-700 p-5 my-5 rounded-md drop-shadow-lg md:w-2/5 dark:bg-slate-700 grow-animate">
      <div className=" mx-4 my-10">
        <div className="flex-1 text-slate-800 outline-0 border-b border-slate-200 text-4xl placeholder-slate-800 px-2 mx-2 w-full dark:text-white dark:border-slate-600">
          {props.formName}
        </div>
      </div>
    </div>
  );
}
