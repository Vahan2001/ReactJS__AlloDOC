import MyNotesStatus from "./MyNotesStatus/MyNotesStatus";

export default function MyNotes(props) {
  const titleRu = props.translate.ru.myNotesTitle;
  const titleEn = props.translate.en.myNotesTitle;
  return (
    <div className="my__notes">
      <div className="container">
        <div className="my__notes-title">
          <h2>{props.language === props.translate.ru ? titleRu : titleEn}</h2>
        </div>
        <MyNotesStatus
          translate={props.translate}
          setLanguage={props.setLanguage}
          language={props.language}
        />
      </div>
    </div>
  );
}
