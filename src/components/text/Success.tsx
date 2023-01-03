import logo from "../../assets/ImproveMe.png";

interface ISuccess {
  kindOfErrend: string;
}

const Success = (props: ISuccess) => {
  return (
    <div className="success-wrapper">
      {props.kindOfErrend === "fr" ? (
        <h3>Your request has been sent</h3>
      ) : props.kindOfErrend === "br" ? (
        <h3>Your bug has been reported</h3>
      ) : (
        <h3>Your errend has been sent</h3>
      )}

      <img src={logo} alt="Logo image" />
    </div>
  );
};

export default Success;
