import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { IBugReport, IFile } from "../../models/IBugReport";
import Complete from "../buttons/Complete";
import { BsPlusCircle, BsTrash } from "react-icons/bs";
import { useEffect } from "react";

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
  const [fileAlreadyExists, setFileAlreadyExists] = useState(false);
  const [postImage, setPostImage] = useState<IFile[]>([{ file: "" }]);

  useEffect(() => {
    if (postImage.length === 0) {
      setFileAlreadyExists(false);
    }
    props.setBugReport({
      description: props.bugReport.description,
      background: props.bugReport.background,
      part: props.bugReport.part,
      reproduce: props.bugReport.reproduce,
      files: postImage,
      email: "",
      approved: true,
      status: "",
      assignedTo: "",
    });
  }, [postImage]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] as Blob;
    const base64: string = (await convertToBase64(file)) as string;
    setPostImage([...postImage, { file: base64 }]);
  };

  const convertToBase64 = (file: Blob) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const removeFile = (file: string) => {
    // setFileAlreadyExists(false);
    const newArr = postImage.filter((image) => image.file !== file);

    setPostImage(newArr);
  };

  console.log(postImage);

  return (
    <>
      <h4 className="txt-400 step-title">Step 5:</h4>
      <div className="txt-300">{props.stepDescription}</div>
      <div className="file-card">
        <div className="upload__image-wrapper">
          <form>
            <input
              type="file"
              aria-label="image"
              name="myFile"
              id="file-upload"
              accept=".jpeg, .png, .jpg"
              onChange={(e) => handleFileUpload(e)}
            />
          </form>
        </div>
      </div>
      {postImage.length === 0 ? (
        <></>
      ) : (
        postImage.map((image: IFile, i) => {
          return image.file !== "" ? (
            <div key={i} className="image-item">
              <img className="file-img" src={image.file} alt="" />

              <BsTrash onClick={() => removeFile(image.file)} />
            </div>
          ) : (
            <></>
          );
        })
      )}

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
