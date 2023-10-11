import html2canvas from "html2canvas";
import data from "./images.json"
import pixelmatch from 'pixelmatch';

const WIDTH = 400;
const HEIGHT = 300;

export const handleComparison = async (image, outputImg, setOutputImg, result, setResult, outputRef) =>
{
    const element = outputRef.current;
    const html = element.contentWindow.document.body.innerHTML;
    const canvas = await html2canvas(element);
    // setOutputImg(canvas.toDataURL("image/png"));
    console.log(html);
    
    const context = canvas.getContext('2d');
    const outputData = context.getImageData(0, 0, WIDTH, HEIGHT).data;

    const sample = new Image;
    sample.src = data.images[image].url;
    sample.onload = () => {
        const cnv = document.createElement('canvas');
        const ctx = cnv.getContext('2d');
        ctx.drawImage(sample, 0, 0);
        const sampleImgData = ctx.getImageData(0, 0, WIDTH, HEIGHT).data;

        console.log('Output Data: ', outputData);
        console.log('Target Data: ', sampleImgData);
        
        const diff = pixelmatch(outputData, sampleImgData, null, 400, 300, { threshold: 0 });
        const matchPercentage = (100 - (100 * diff) / (WIDTH * HEIGHT)).toFixed(2);
        setResult({ ...result, accuracy: matchPercentage, visible: true });
    }
};
