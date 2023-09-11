import style from "/styles/modules/Description.module.css";

const SubScription = ({ title, text }) => {
  return (
    <div className={style.subScription}>
      {title && <h4>{title}</h4>}
      <div>{text}</div>
    </div>
  );
};

export default SubScription;
