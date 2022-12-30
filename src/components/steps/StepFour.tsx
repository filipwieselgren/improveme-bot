import { useState } from "react";
import { IBugReport } from "../../models/IBugReport";
import ChangeStep from "../buttons/ChangeStep";

interface IStepFour {
  setStep: React.Dispatch<React.SetStateAction<boolean>>;
  handleScroll(): void;
  setBugReport: React.Dispatch<React.SetStateAction<IBugReport>>;
  bugReport: IBugReport;
  stepDescription: string;
  placeHolder: string;
  kindOfErrend: string;
}

const StepFour = (props: IStepFour) => {
  const [txtAreaValue, setTxtAreaValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTxtAreaValue(e.target.value);
    if (props.kindOfErrend === "br") {
      props.setBugReport({
        description: props.bugReport.description,
        background: props.bugReport.background,
        part: props.bugReport.part,
        reproduce: e.target.value,
        files: undefined,
        email: "",
      });
    }
  };
  return (
    <>
      <h4 className="txt-400 step-title">Step 4:</h4>
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
        stepNumber={5}
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

export default StepFour;
