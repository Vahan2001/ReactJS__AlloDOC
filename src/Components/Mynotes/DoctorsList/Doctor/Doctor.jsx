export default function Doctor(props) {
  return (
    <div className="doctors__item">
      <div className="doctor__desc">
        <div className="doctor__img">
          <img
            src={props.filterDoctors[props.index].doctorsImg}
            alt="Doctor Image"
          />
        </div>
        <div className="doctor__name">
          <h3>{props.filterDoctors[props.index].name}</h3>
          <p>{props.filterDoctors[props.index].profession}</p>
          <b>{props.filterDoctors[props.index].experience}</b>
        </div>
        <div className="doctor__btn">
          <button>{props.filterDoctors[props.index].docBtn1}</button>
          <button>{props.filterDoctors[props.index].docBtn2}</button>
        </div>
      </div>
    </div>
  );
}
