import { useState } from "react";
import ImageSelector from "./ImageSelector";

const OriginalImage = (props: any) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex flex-col justify-center">
      <div
        onMouseLeave={() => setMenuOpen(false)}
        className="px-4 py-2 bg-slate-300 absolute top-[170px] z-10 cursor-pointer"
      >
        <div onMouseDown={() => setMenuOpen(true)}>Select Battle</div>
        {isMenuOpen &&
          props.data.images.map((img: any, index: number) => (
            <ImageSelector
              key={`id-${index}`}
              image={img}
              setImage={props.setImage}
              currentImage={props.image}
              data={props.data}
            />
          ))}
      </div>
      <img
        src={props.data.images[props.image].url}
        alt="target"
        className="aspect-[4/3] w-[400px] h-[300px] m-auto"
      />
    </div>
  );
};

export default OriginalImage;
