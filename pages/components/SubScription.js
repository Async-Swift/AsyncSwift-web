const SubScription = ({ title, text }) => {
  return (
    <div>
      {title && <h4>{title}</h4>}
      <div>{text}</div>
    </div>
  );
};

export default SubScription;
