import classes from "./NumBtn.module.css";
export default ({ symbol, fun }) => {
  return (
    <button
      onClick={fun}
      className={
        symbol ? classes.btn : [classes.nullbtn, classes.btn].join(" ")
      }
    >
      {symbol}
    </button>
  );
};
