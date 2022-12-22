import { useState } from "react";
import ChangeStep from "../../components/buttons/ChangeStep";
import { IParts } from "../../models/IPart";
import partMock from "../../data/partMock";

interface IStepThree {
  setEmail: React.Dispatch<React.SetStateAction<boolean>>;
}
const FrStepThree = (props: IStepThree) => {
  const [parts, setParts] = useState<IParts[]>(partMock.parts);
  const [chosePart, setChosePart] = useState<IParts>({
    id: "",
    part: "",
  });

  const getPart = (part: IParts) => {
    setChosePart(part);
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
            <button key={p.id} className="part-btn" onClick={() => getPart(p)}>
              {p.part}
            </button>
          );
        })}
      </div>
      <ChangeStep
        setFrStep={props.setEmail}
        stepNumber={4}
        txtAreaValue={" "}
        part={chosePart}
      />
    </>
  );
};

export default FrStepThree;
