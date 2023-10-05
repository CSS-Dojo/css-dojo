import { useRef } from "react";

const CodeWindow = (props: any) => {
  return (
    <div className="w-2/3 flex flex-row h-96 overflow-hidden">
      <textarea
        className="w-1/2 h-96 bg-slate-900 text-white font-mono align-top p-2 resize-none mr-2"
        placeholder="Write code here"
        onChange={(e) => {
          props.setCode(e.target.value);
          console.log(e.target.value);
        }}
      ></textarea>
      <div className=" w-1/2 flex flex-col justify-center">
        <iframe
          className="aspect-[4/3] w-96 m-auto border-solid border-2 border-gray-300"
          srcDoc={props.code}
          ref={props.outputRef}
        ></iframe>
      </div>
    </div>
  );
};

export default CodeWindow;
