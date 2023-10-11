"use client"
import CodeWindow from "./CodeWindow";
import OriginalImage from "./OriginalImage";
import data from "../utils/images.json";
import { handleComparison } from "../utils/handler";
import { useState, useRef } from "react";

export default () => {
    const [image, setImage] = useState(0);
    const [code, setCode] = useState("");
    const [outputImg, setOutputImg] = useState("");
    const outputRef = useRef<any>();
    const [result, setResult] = useState({
        accuracy: 0,
        visible: false,
    });
    
    return (
    <main className="bg-slate-400 h-screen p-4">
        <div className="text-4xl">CSSDiffChecker</div>
        <div className="flex flex-row w-full justify-between py-5 mt-20 mb-5 px-5">
            <CodeWindow code={code} setCode={setCode} outputRef={outputRef} />
            <OriginalImage image={image} setImage={setImage} data={data} />
        </div>
        <div className={`${result.visible ? "opacity-100" : "opacity-0"} m-2`}>
            {code.trim().length} characters &nbsp; &nbsp;
            {result.accuracy}% accuracy
        </div>
        <button
                onClick={() => handleComparison(image, outputImg, setOutputImg, result, setResult, outputRef)}
                className="py-4 px-6 m-auto w-fit rounded-3xl text-white bg-slate-700">
            Compare the images
      </button>
    </main>
  );
}