import { useState } from "react";
import ChangeStep from "../../components/buttons/ChangeStep";
import { IParts } from "../../models/IPart";
import partMock from "../../data/partMock";
import Complete from "../../components/buttons/Complete";
import IFeatureRequest from "../../models/IFeatureRequest";

interface IStepThree {
  setEmail: React.Dispatch<React.SetStateAction<boolean>>;
  handleScroll(): void;
  setFeatureRequest: React.Dispatch<React.SetStateAction<IFeatureRequest>>;
  featureRequest: IFeatureRequest;
}
const FrStepThree = (props: IStepThree) => {
  const [parts, setParts] = useState<IParts[]>(partMock.parts);
  const [chosePartId, setChosePartId] = useState<string>("");
  const [sendPart, setSendPart] = useState<IParts>({
    id: "",
    part: "",
  });

  const getPart = (part: IParts) => {
    setSendPart(part);
    setChosePartId(part.id);
    props.setFeatureRequest({
      description: props.featureRequest.description,
      solvesWhat: props.featureRequest.solvesWhat,
      part: part.part,
      email: "",
    });
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
              className={chosePartId === p.id ? "clicked-part" : "part-btn"}
              id={`part${p.id}`}
              onClick={() => getPart(p)}
            >
              {p.part}
            </button>
          );
        })}
      </div>
      <Complete
        setEmail={props.setEmail}
        handleScroll={props.handleScroll}
        sendPart={sendPart}
      />
    </>
  );
};

export default FrStepThree;
