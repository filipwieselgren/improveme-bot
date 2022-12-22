import { useState } from "react";
import ChangeStep from "../../components/buttons/ChangeStep";
import { IParts } from "../../models/IPart";
import partMock from "../../data/partMock";

interface IStepThree {
  setFrStepFour: React.Dispatch<React.SetStateAction<boolean>>;
}
const FrStepThree = (props: IStepThree) => {
  const [parts, setParts] = useState<IParts[]>(partMock.parts);

  const getPart = (part: IParts) => {
    console.log(part);
  };
  return (
    <>
      <h4 className="txt-400 step-title">Step 1:</h4>
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
        setFrStep={props.setFrStepFour}
        stepNumber={4}
        txtAreaValue={""}
      />
    </>
  );
};

export default FrStepThree;
