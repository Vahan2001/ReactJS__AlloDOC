import { useCallback, useEffect, useState } from "react";
import DoctorsList from "../doctorsList/DoctorsList";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { DoctorsListActions } from "../../../store/actions";

export default function MyNotesStatus() {
  const { t } = useTranslation();
  const [id, setId] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(DoctorsListActions.get(1));
  }, [dispatch]);
  const clickHandler = useCallback(
    (id) => {
      return () => {
        dispatch(DoctorsListActions.get(id));
        setId(id);
      };
    },
    [dispatch, id]
  );

  return (
    <div className="my__notes-status">
      <div className="my__status-btns">
        <button onClick={clickHandler(1)} className={id === 1 ? "active" : ""}>
          {t("therapist")}
        </button>
        <button onClick={clickHandler(2)} className={id === 2 ? "active" : ""}>
          {t("pediatrician")}
        </button>
        <button onClick={clickHandler(4)} className={id === 4 ? "active" : ""}>
          {t("obstetrician-gynecologist")}
        </button>
      </div>
      <DoctorsList />
    </div>
  );
}
