import { useState } from "react";
import { IBugReport, IFiles } from "../../models/IBugReport";
import Complete from "../buttons/Complete";
import { BsPlusCircle } from "react-icons/bs";

interface IStepFive {
  setStep: React.Dispatch<React.SetStateAction<boolean>>;
  handleScroll(): void;
  setBugReport: React.Dispatch<React.SetStateAction<IBugReport>>;
  bugReport: IBugReport;
  stepDescription: string;
  placeHolder: string;
  kindOfErrend: string;
}

const StepFive = (props: IStepFive) => {
  const [files, setFiles] = useState<FileList[]>([]);
  const uploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files as FileList;

    setFiles([...files, file]);
  };

  return (
    <>
      <h4 className="txt-400 step-title">Step 5:</h4>
      <div className="txt-300">{props.stepDescription}</div>
      <div className="file-card">
        <div className="file-inputs">
          <input type="file" onChange={(e) => uploadHandler(e)} />
          <button>
            <i>
              <BsPlusCircle className="react-icon" />
            </i>
            Upload
          </button>
        </div>
        <p>Support files</p>
        <p>PDF, JPG, PNG</p>
      </div>

      <Complete
        setEmail={props.setStep}
        handleScroll={props.handleScroll}
        sendPart={{
          id: "",
          part: " ",
        }}
      />
    </>
  );
};

export default StepFive;
