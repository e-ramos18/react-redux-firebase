const Title = ({ text, extra = null }) => {
  return (
    <h5 className="title">
      {text}
      {extra && <span className="extra"> : {extra}</span>}
    </h5>
  );
};

export default Title;
