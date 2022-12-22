interface IComplete {
  setEmail: React.Dispatch<React.SetStateAction<boolean>>;
  handleScroll(): void;
}

const Complete = (props: IComplete) => {
  const handleCompleteClick = () => {
    props.setEmail(true);
    props.handleScroll();
  };
  return (
    <>
      <button className="change-step" onClick={handleCompleteClick}>
        Complete
      </button>
    </>
  );
};

export default Complete;
