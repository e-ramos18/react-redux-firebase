const Btn = ({ label, className, onClickHandler }) => {
  return (
    <button className={className} onClick={() => onClickHandler()}>
      {className === "add-upload" ? (
        <span>
          <i className="fa fa fa-plus"></i>
        </span>
      ) : null}
      <span> {label}</span>
    </button>
  );
};

export default Btn;
