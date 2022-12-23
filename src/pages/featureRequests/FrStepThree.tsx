import { useState } from "react";
import ChangeStep from "../../components/buttons/ChangeStep";
import { IParts } from "../../models/IPart";
import partMock from "../../data/partMock";
import Complete from "../../components/buttons/Complete";

interface IStepThree {
  setEmail: React.Dispatch<React.SetStateAction<boolean>>;
  handleScroll(): void;
}
const FrStepThree = (props: IStepThree) => {
  const [parts, setParts] = useState<IParts[]>(partMock.parts);
  const [chosePart, setChosePart] = useState<string>("");

  const getPart = (part: IParts) => {
    setChosePart(part.id);
  };
  return (
    <>
      <h4 className="txt-400 step-title">Step 3:</h4>
      <div className="txt-300 ">
        In which category/part of the platform does the feature belongs to?
      </div>
      <div className="parts-btn-wrapper">
        {parts.map((p) => {
          return (
            <button
              key={p.id}
              className={chosePart === p.id ? "clicked-part" : "part-btn"}
              id={`part${p.id}`}
              onClick={() => getPart(p)}
            >
              {p.part}
            </button>
          );
        })}
      </div>
      <Complete setEmail={props.setEmail} handleScroll={props.handleScroll} />
    </>
  );
};

export default FrStepThree;
