import html2canvas from "html2canvas";
import data from "./images.json"
import pixelmatch from 'pixelmatch';

const WIDTH = 400;
const HEIGHT = 300;

export const handleComparison = async (image, outputImg, setOutputImg, setResult, outputRef) =>
{
    const element = outputRef.current;
    const canvas = await html2canvas(element);
    setOutputImg(canvas.toDataURL("image/png"));
    
    const context = canvas.getContext('2d');
    const outputData = context.getImageData(0, 0, WIDTH, HEIGHT);

    // outputData.data.forEach(elem => {
    //     if (elem !== 255) {
    //         console.log("WRONG");
    //     }
    // });

    const sample = new Image;
    sample.src = data.images[image].url;
    sample.onload = () => {
        const cnv = document.createElement('canvas');
        const ctx = cnv.getContext('2d');
        ctx.drawImage(sample, 0, 0);
        const sampleImgData = ctx.getImageData(0, 0, WIDTH, HEIGHT);
        
        const diff = pixelmatch(outputData.data, sampleImgData.data, null, 400, 300, { threshold: 0.1 });
        const matchPercentage = (100 - (100 * diff) / (WIDTH * HEIGHT)).toFixed(2);
        setResult({ accuracy: matchPercentage, visible: true });
    }

    // const diff = pixelmatch(img1.data, img2.data, null, 400, 300, { threshold: 0.1 });
    // console.log(diff);
};
