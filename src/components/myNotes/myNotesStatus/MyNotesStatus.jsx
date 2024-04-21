import { useEffect, useState } from "react";
import DoctorsList from "../doctorsList/DoctorsList";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { UserSelector } from "../../../store/selectors";
import { requestDoctors } from "../../../store/actions/userActions";

export default function MyNotesStatus() {
  const { t } = useTranslation();
  const [id, setId] = useState(1);
  const doctors = useSelector(UserSelector.doctorsUserSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    // doctorsAPI
    //   .get(`/?page=1&category=${id}`)
    //   .then((res) => {
    //     dispatch(UserAction.requestDoctors(res.data.results));
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching doctors:", error);
    //   });
    dispatch(requestDoctors(id));
  }, [id, dispatch]);

  return (
    <div className="my__notes-status">
      <div className="my__status-btns">
        <button onClick={() => setId(1)} className={id === 1 ? "active" : ""}>
          {t("therapist")}
        </button>
        <button onClick={() => setId(2)} className={id === 2 ? "active" : ""}>
          {t("pediatrician")}
        </button>
        <button onClick={() => setId(4)} className={id === 4 ? "active" : ""}>
          {t("obstetrician-gynecologist")}
        </button>
      </div>
      <DoctorsList doctors={doctors} />
    </div>
  );
}
