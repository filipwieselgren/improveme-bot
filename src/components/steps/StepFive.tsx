import { useState } from "react";
import { Files, IBugReport } from "../../models/IBugReport";
import Complete from "../buttons/Complete";
import { BsPlusCircle, BsTrash } from "react-icons/bs";
import { useEffect } from "react";
import IGeneralImprovements from "../../models/IGeneralImprovements";

interface IStepFive {
  setStep: React.Dispatch<React.SetStateAction<boolean>>;
  handleScroll(): void;
  setBugReport: React.Dispatch<React.SetStateAction<IBugReport>>;
  setGeneralImprovement: React.Dispatch<
    React.SetStateAction<IGeneralImprovements>
  >;
  generalImprovement: IGeneralImprovements;
  bugReport: IBugReport;
  stepDescription: string;
  placeHolder: string;
  kindOfErrend: string;
}

const StepFive = (props: IStepFive) => {
  const [files, setFiles] = useState<FormData | any>([]);
  const [fileAlreadyExists, setFileAlreadyExists] = useState(false);

  useEffect(() => {
    if (files.length === 0) {
      setFileAlreadyExists(false);
    }
    props.setBugReport({
      description: props.bugReport.description,
      background: props.bugReport.background,
      part: props.bugReport.part,
      reproduce: props.bugReport.reproduce,
      files: files,
      email: "",
      approved: true,
      status: "",
      assignedTo: "",
    });
  }, [files]);

  const uploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileExists = files.some((f: any) => f.name === file.name);
    if (fileExists) {
      setFileAlreadyExists(true);
      return;
    }

    setFileAlreadyExists(false);
    setFiles([...files, file]);
  };

  const removeFile = (name: string) => {
    setFileAlreadyExists(false);
    setFiles(files.filter((file: any) => file.name !== name));
  };

  console.log("files:", files);

  return (
    <>
      <h4 className="txt-400 step-title">Step 5:</h4>
      <div className="txt-300">{props.stepDescription}</div>
      <div className="file-card">
        <div className="file-inputs">
          <input
            type="file"
            accept="image/jpg, image/jpeg, image/png, application/pdf, video/mp4, video/avi, video/mpeg"
            multiple
            onChange={(e) => uploadHandler(e)}
          />
          <button>
            <i>
              <BsPlusCircle className="react-icon" />
            </i>
            Upload
          </button>
        </div>
        <p>Support files</p>
        <p>PNG, JPG</p>
      </div>
      {fileAlreadyExists ? (
        <p className="file-exists">You have already uploaded this file.</p>
      ) : (
        <></>
      )}
      {files.map((f: any, i: number) => {
        return (
          <div key={i} className="file-wrapper txt-200">
            <div> {f.name}</div>
            <BsTrash
              onClick={() => removeFile(f.name)}
              className="remove-file"
            />
          </div>
        );
      })}

      <Complete
        setEmail={props.setStep}
        handleScroll={props.handleScroll}
        sendPart={{
          _id: "",
          section: " ",
        }}
      />
    </>
  );
};

export default StepFive;
