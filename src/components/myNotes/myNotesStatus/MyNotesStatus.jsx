import myNotesStyles from "../myNotes.module.css";
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
    <div className={myNotesStyles.my__notes__status}>
      <div className={myNotesStyles.my__status__btns}>
        <button
          onClick={clickHandler(1)}
          className={id === 1 ? myNotesStyles.active : ""}
        >
          {t("therapist")}
        </button>
        <button
          onClick={clickHandler(2)}
          className={id === 2 ? myNotesStyles.active : ""}
        >
          {t("pediatrician")}
        </button>
        <button
          onClick={clickHandler(4)}
          className={id === 4 ? myNotesStyles.active : ""}
        >
          {t("obstetrician-gynecologist")}
        </button>
      </div>
      <DoctorsList />
    </div>
  );
}
