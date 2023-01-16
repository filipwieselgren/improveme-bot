import { useEffect, useState } from "react";
import ChangeStep from "../../components/buttons/ChangeStep";
import { IParts } from "../../models/IPart";
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
  parts: IParts[];
}
const FrStepThree = (props: IStepThree) => {
  const [chosePartId, setChosePartId] = useState<string>("");
  const [sendPart, setSendPart] = useState<IParts>({
    _id: "",
    section: "",
  });

  const getPart = (part: IParts) => {
    setSendPart(part);
    setChosePartId(part._id);
    if (props.kindOfErrend === "fr") {
      props.setFeatureRequest({
        description: props.featureRequest.description,
        solvesWhat: props.featureRequest.solvesWhat,
        part: part.section,
        email: "",
        approved: false,
        status: "",
        assignedTo: "",
      });
    } else if (props.kindOfErrend === "br") {
      props.setBugReport({
        description: props.bugReport.description,
        background: props.bugReport.background,
        part: part.section,
        reproduce: "",
        files: [{ file: "" }],
        email: "",
        approved: true,
        status: "",
        assignedTo: "",
      });
    } else if (props.kindOfErrend === "gi") {
      props.setGeneralImprovement({
        description: props.generalImprovement.description,
        solvesWhat: props.generalImprovement.solvesWhat,
        part: part.section,
        email: "",
        approved: false,
        status: "",
        assignedTo: "",
      });
    }
  };

  return (
    <>
      <h4 className="txt-400 step-title">Step 3:</h4>
      <div className="txt-300 ">{props.stepDescription}</div>
      <div className="parts-btn-wrapper">
        {props.parts.length > 0 ? (
          props.parts.map((p) => {
            return (
              <button
                key={p._id}
                className={chosePartId === p._id ? "clicked-part" : "part-btn"}
                id={`part${p._id}`}
                onClick={() => getPart(p)}
              >
                {p.section}
              </button>
            );
          })
        ) : (
          <p>No part added</p>
        )}
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
