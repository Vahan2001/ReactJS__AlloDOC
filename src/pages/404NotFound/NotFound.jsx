import notFoundStyles from "./notFound.module.css";
import notFoundImg from "../../images/error.jpg";
export default function NotFound() {
  return (
    <div className={notFoundStyles.not__found__page}>
      <div className="container">
        <div className={notFoundStyles.not__found}>
          <div className={notFoundStyles.not__found__text}>
            <h1>404</h1>
            <p>Page Not Found</p>
          </div>
          <div className={notFoundStyles.not__found__img}>
            <img src={notFoundImg} alt="404 image" />
          </div>
        </div>
      </div>
    </div>
  );
}
