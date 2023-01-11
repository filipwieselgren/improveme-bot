import { useState } from "react";
import ChangeStep from "../../components/buttons/ChangeStep";
import { IBugReport } from "../../models/IBugReport";
import IFeatureRequest from "../../models/IFeatureRequest";
import IGeneralImprovements from "../../models/IGeneralImprovements";

interface IStepOne {
  setStep: React.Dispatch<React.SetStateAction<boolean>>;
  handleScroll(): void;
  setFeatureRequest: React.Dispatch<React.SetStateAction<IFeatureRequest>>;
  setBugReport: React.Dispatch<React.SetStateAction<IBugReport>>;
  setGeneralImprovement: React.Dispatch<
    React.SetStateAction<IGeneralImprovements>
  >;
  paragraphOne: string;
  paragraphTwo: string;
  stepDescription: string;
  placeHolder: string;
  kindOfErrend: string;
}

const StepOne = (props: IStepOne) => {
  const [txtAreaValue, setTxtAreaValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTxtAreaValue(e.target.value);
    if (props.kindOfErrend === "fr") {
      props.setFeatureRequest({
        description: e.target.value,
        solvesWhat: "",
        part: "",
        email: "",
        approved: false,
        status: "Not started",
        assignedTo: "Not assigned",
      });
    } else if (props.kindOfErrend === "br") {
      props.setBugReport({
        description: e.target.value,
        background: "",
        part: "",
        reproduce: "",
        files: undefined,
        email: "",
        approved: true,
        status: "Not started",
        assignedTo: "Not assigned",
      });
    } else if (props.kindOfErrend === "gi") {
      props.setGeneralImprovement({
        description: e.target.value,
        solvesWhat: "",
        part: "",
        email: "",
        approved: false,
        status: "Not started",
        assignedTo: "Not assigned",
      });
    }
  };
  return (
    <>
      <div className="txt-200">{props.paragraphOne}</div>

      <div className="txt-200">{props.paragraphTwo}</div>
      <h4 className="txt-400 step-title">Step 1</h4>
      <div className="txt-300 ">{props.stepDescription}</div>
      <form action="">
        <textarea
          className="txt-area"
          name=""
          id="text1"
          placeholder={props.placeHolder}
          cols={30}
          rows={10}
          onFocus={props.handleScroll}
          onChange={(e) => handleChange(e)}
        ></textarea>
      </form>
      <ChangeStep
        setFrStep={props.setStep}
        stepNumber={1}
        txtAreaValue={txtAreaValue}
        part={{
          _id: "",
          section: " ",
        }}
        handleScroll={props.handleScroll}
      />
    </>
  );
};

export default StepOne;
