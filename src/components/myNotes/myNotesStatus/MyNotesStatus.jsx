import { useContext, useEffect, useState } from "react";
import DoctorsList from "../doctorsList/DoctorsList";
import { TranslateContext } from "../../../App";

export default function MyNotesStatus() {
  const t = useContext(TranslateContext);
  const [filter, setFilter] = useState(t.scheduled);
  useEffect(() => {
    setFilter(t.scheduled);
  }, [t]);
  return (
    <div className="my__notes-status">
      <div className="my__status-btns">
        <button
          onClick={() => setFilter(t.scheduled)}
          className={filter === t.scheduled ? "active" : ""}
        >
          {t.scheduled}
        </button>
        <button
          onClick={() => setFilter(t.past)}
          className={filter === t.past ? "active" : ""}
        >
          {t.past}
        </button>
        <button
          onClick={() => setFilter(t.canceled)}
          className={filter === t.canceled ? "active" : ""}
        >
          {t.canceled}
        </button>
      </div>
      <DoctorsList filter={filter} />
    </div>
  );
}