// "use client"
// import CodeWindow from "@/components/CodeWindow";
// import OriginalImage from "@/components/OriginalImage";
// import { useState, useRef } from "react";
import HomePage from "../components/HomePage";
// import html2canvas from "html2canvas";
// import Jimp from "jimp";
// import data from "../utils/images.json";

export default function Home() {
  // const [image, setImage] = useState(0);
  // const [code, setCode] = useState("");
  // const [outputImg, setOutputImg] = useState("");
  // const outputRef = useRef<any>();
  // const [result, setResult] = useState({
  //   accuracy: 0,
  //   visible: false,
  // });

  // const checkAccuracy = async (ref: any) => {
  //   const element = ref.current;
  //   const canvas = await html2canvas(element);
  //   setOutputImg(canvas.toDataURL("image/png"));

  //   const img1 = await Jimp.read(outputImg);
  //   const img2 = await Jimp.read(data.images[image].url);
  //   const diff = Jimp.diff(img1, img2);
  //   setResult({ ...result, accuracy: diff.percent });
  // };

  // const handleComparison = async () => {
  //   const element = outputRef.current;
  //   const canvas = await html2canvas(element);
  //   setOutputImg(canvas.toDataURL("image/png"));
  //   await checkAccuracy(outputRef);
  //   setResult({ ...result, visible: true });
  // };
  return (
    // <>
    //   <div className="text-4xl">CSSDiffChecker</div>
    //   <div className="flex flex-row w-full justify-between py-5 mt-20 mb-5 px-5">
    //     <CodeWindow code={code} setCode={setCode} outputRef={outputRef} />
    //     <OriginalImage image={image} setImage={setImage} data={data} />
    //   </div>
    //   <div className={`${result.visible ? "opacity-100" : "opacity-0"} m-2`}>
    //     {code.trim().length} characters &nbsp; &nbsp;
    //     {result.accuracy}% accuracy
    //   </div>
    //   <button onClick={handleComparison} className="px-4 py-2 bg-slate-400">
    //     Compare the images
    //   </button>
    // </>
    <HomePage/>
  );
}
