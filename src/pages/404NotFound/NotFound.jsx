import notFoundImg from "../../images/error.jpg";
export default function NotFound() {
  return (
    <div className="not__found-page">
      <div className="container">
        <div className="not__found">
          <div className="not__found-text">
            <h1>404</h1>
            <p>Page Not Found</p>
          </div>
          <div className="not__found-img">
            <img src={notFoundImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
