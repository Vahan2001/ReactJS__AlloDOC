import { useContext } from "react";
import MyNotesStatus from "./myNotesStatus/MyNotesStatus";
import { TranslateContext } from "../../App";
export default function MyNotes() {
  const t = useContext(TranslateContext);
  return (
    <div className="my__notes">
      <div className="container">
        <div className="my__notes-title">
          <h2>{t.myNotesTitle}</h2>
        </div>
        <MyNotesStatus />
      </div>
    </div>
  );
}
