import Send from "../../components/buttons/Send";
import IFeatureRequest from "../../models/IFeatureRequest";
interface IEmail {
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setFeatureRequest: React.Dispatch<React.SetStateAction<IFeatureRequest>>;
  featureRequest: IFeatureRequest;
}

const Email = (props: IEmail) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setFeatureRequest({
      description: props.featureRequest.description,
      solvesWhat: props.featureRequest.solvesWhat,
      part: props.featureRequest.part,
      email: e.target.value,
    });
  };
  return (
    <>
      <div className="txt-300 thank-you-txt">
        Thank you for all the information!
      </div>
      <div className="txt-200">
        Sometimes the tech team will have additional questions regarding the
        feature, since they want to understand your request better.
      </div>
      <div className="txt-300">
        Leave your work e-mail so they can get back to you.
        <span className="txt-400">You can leave it blank as well.</span>
      </div>
      <form action="">
        <input
          className="email-input"
          placeholder="Email..."
          onChange={(e) => handleChange(e)}
        ></input>
      </form>
      <Send
        setSuccess={props.setSuccess}
        featureRequest={props.featureRequest}
      />
    </>
  );
};

export default Email;
