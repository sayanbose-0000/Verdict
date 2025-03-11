import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

type TProps = {
  currStars: number,
  setCurrStars: Dispatch<SetStateAction<number>>
}

const FiveStars = ({ currStars, setCurrStars }: TProps) => {
  const starArr = [1, 2, 3, 4, 5];

  const [starHoverVal, setStarHoverVal] = useState<number>(-1);

  const handleStarClick = (idx: number) => {
    setCurrStars(idx + 1);
  }

  const handleMouseOver = (idx: number) => {
    setStarHoverVal(idx + 1);
  }

  const handleMouseOut = (idx: number) => {
    setStarHoverVal(-1);
  }

  return (
    <div className="flex cursor-pointer justify-center items-center self-start" >
      {
        starArr.map((item, idx) => (
          <button type="button" key={idx} onClick={e => handleStarClick(idx)} className="scaleContainer p-1" onMouseOver={e => handleMouseOver(idx)} onMouseOut={e => handleMouseOut(idx)} >
            <Image src={currStars > idx ? "/icons/star-filled.svg" : starHoverVal > idx ? "/icons/star-gray.svg" : "/icons/star-empty.svg"} height={25} width={25} alt={`${item}`} />
          </button>
        ))
      }
    </div>
  );
};

export default FiveStars;