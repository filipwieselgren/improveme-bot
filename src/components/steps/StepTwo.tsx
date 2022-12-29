import { useState } from "react";
import ChangeStep from "../../components/buttons/ChangeStep";
import { IBugReport } from "../../models/IBugReport";
import IFeatureRequest from "../../models/IFeatureRequest";

interface IStepTwo {
  setStep: React.Dispatch<React.SetStateAction<boolean>>;
  handleScroll(): void;
  setFeatureRequest: React.Dispatch<React.SetStateAction<IFeatureRequest>>;
  setBugReport: React.Dispatch<React.SetStateAction<IBugReport>>;
  featureRequest: IFeatureRequest;
  bugReport: IBugReport;
  stepDescription: string;
  placeHolder: string;
  kindOfErrend: string;
}
const StepTwo = (props: IStepTwo) => {
  const [txtAreaValue, setTxtAreaValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTxtAreaValue(e.target.value);
    if (props.kindOfErrend === "fr") {
      props.setFeatureRequest({
        description: props.featureRequest.description,
        solvesWhat: e.target.value,
        part: "",
        email: "",
      });
    } else if (props.kindOfErrend === "br") {
      props.setBugReport({
        description: props.bugReport.description,
        background: e.target.value,
        part: "",
        reproduce: "",
        files: [],
        email: "",
      });
    }
  };
  return (
    <>
      <h4 className="txt-400 step-title">Step 2:</h4>
      <div className="txt-300">{props.stepDescription}</div>
      <form action="">
        <textarea
          className="txt-area"
          name=""
          id="text2"
          placeholder={props.placeHolder}
          cols={30}
          rows={10}
          onChange={(e) => handleChange(e)}
        ></textarea>
      </form>
      <ChangeStep
        setFrStep={props.setStep}
        stepNumber={2}
        txtAreaValue={txtAreaValue}
        part={{
          id: "",
          part: " ",
        }}
        handleScroll={props.handleScroll}
      />
    </>
  );
};

export default StepTwo;
