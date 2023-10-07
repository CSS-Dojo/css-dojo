const Outpput = (props: any) => {
  return <div className=" w-1/2 flex flex-col justify-center">
    <iframe
      className="aspect-[4/3] w-[400px] h-[300px] m-auto border-solid border-2 border-gray-300"
      srcDoc={props.code}
      ref={props.outputRef}
    ></iframe>
  </div>;
}

const CodeWindow = (props: any) => {
  return (
    <div className="w-2/3 flex flex-row h-96 overflow-hidden">
      <textarea
        className="w-1/2 h-96 bg-slate-900 text-white font-mono align-top p-2 resize-none"
        placeholder="Write code here"
        name="code"
        onChange={(e) => {
          props.setCode(e.target.value);
        }}
      ></textarea>
      <Outpput code={props.code} outputRef={props.outputRef} />
    </div>
  );
};

export default CodeWindow;

