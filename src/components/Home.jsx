import style from "../css/Main.module.css";
function Main() {
  return (
    <div>
      <div className={style.center}>
        <h1>Cover your page.</h1>
        <span>
          Cover is a one-page template for building simple and beautiful home
          pages. Download, edit the text, and add your own fullscreen background
          photo to make it your own.
        </span>
      </div>
      <div className={style.button}><button>Learn More</button></div>
    </div>
  );
}

export default Main;
