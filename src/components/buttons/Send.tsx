interface ISend {
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const Send = (props: ISend) => {
  const handleSendClick = () => {
    props.setSuccess(true);
  };
  return (
    <button
      className="change-step"
      id="#send-btn"
      onClick={() => handleSendClick()}
    >
      Send request
    </button>
  );
};

export default Send;
