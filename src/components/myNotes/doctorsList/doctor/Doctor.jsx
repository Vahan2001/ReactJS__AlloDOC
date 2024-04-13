import { Link } from "react-router-dom";
export default function Doctor(props) {
  return (
    <div className="doctors__item">
      <div className="doctor__desc">
        <div className="doctor__img">
          <img
            src={require(`../../../../images/${props.item.doctorsImg}`)}
            alt="Doctor Image"
          />
        </div>
        <div className="doctor__name">
          <h3>{props.item.name}</h3>
          <p>{props.item.profession}</p>
          <b>{props.item.experience}</b>
        </div>
        <div className="doctor__btn">
          <Link
            to={`/mynotes/doctorsprofile/${props.item.id}`}
            className="link__btn"
          >
            {props.item.docBtn1}
          </Link>
          <button>{props.item.docBtn2}</button>
        </div>
      </div>
    </div>
  );
}
