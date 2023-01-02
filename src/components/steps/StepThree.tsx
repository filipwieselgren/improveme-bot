import { useState } from "react";
import ChangeStep from "../../components/buttons/ChangeStep";
import { IParts } from "../../models/IPart";
import partMock from "../../data/partMock";
import Complete from "../../components/buttons/Complete";
import IFeatureRequest from "../../models/IFeatureRequest";
import { IBugReport } from "../../models/IBugReport";
import IGeneralImprovements from "../../models/IGeneralImprovements";

interface IStepThree {
  setStep: React.Dispatch<React.SetStateAction<boolean>>;
  handleScroll(): void;
  setFeatureRequest: React.Dispatch<React.SetStateAction<IFeatureRequest>>;
  setBugReport: React.Dispatch<React.SetStateAction<IBugReport>>;
  setGeneralImprovement: React.Dispatch<
    React.SetStateAction<IGeneralImprovements>
  >;
  generalImprovement: IGeneralImprovements;
  featureRequest: IFeatureRequest;
  bugReport: IBugReport;
  stepDescription: string;
  kindOfErrend: string;
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
    if (props.kindOfErrend === "fr") {
      props.setFeatureRequest({
        description: props.featureRequest.description,
        solvesWhat: props.featureRequest.solvesWhat,
        part: part.part,
        email: "",
      });
    } else if (props.kindOfErrend === "br") {
      props.setBugReport({
        description: props.bugReport.description,
        background: props.bugReport.background,
        part: part.part,
        reproduce: "",
        files: undefined,
        email: "",
      });
    } else if (props.kindOfErrend === "gi") {
      props.setGeneralImprovement({
        description: props.generalImprovement.description,
        reason: props.generalImprovement.reason,
        part: part.part,
        email: "",
      });
    }
  };
  return (
    <>
      <h4 className="txt-400 step-title">Step 3:</h4>
      <div className="txt-300 ">{props.stepDescription}</div>
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
      {props.kindOfErrend === "br" ? (
        <ChangeStep
          setFrStep={props.setStep}
          stepNumber={4}
          txtAreaValue={" "}
          part={sendPart}
          handleScroll={props.handleScroll}
        />
      ) : (
        <Complete
          setEmail={props.setStep}
          handleScroll={props.handleScroll}
          sendPart={sendPart}
        />
      )}
    </>
  );
};

export default FrStepThree;
