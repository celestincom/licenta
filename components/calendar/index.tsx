import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import useLocalStorage from "@/hooks/useLocalStorage";
import useRequest from "@/hooks/useRequest";

export default function Calendar() {
  const [user, setUser] = useLocalStorage("user", { id: "", hasProfile: true });
  const [tripResponse, setTripResponse] = useState({
    city: "",
    nr_days: "",
    start_date: "",
    end_date: "",
    objectives: [
      {
        categorie_mare: "",
        categorie_mica: "",
        city: "",
        descriere: "",
        img: "",
        latitude: "",
        longitude: "",
        nume: "",
        rating: "",
        trasaturi: "",
        reviews: 0,
      },
    ],
  });

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      console.log("No user in localStorage");
    } else if (localStorage.getItem("user")) {
      let user: any = {};
      if (typeof window != "undefined") {
        user = JSON.parse(localStorage.getItem("user") || "");
      }
    }

    getLastHistory();
  }, []);

  const { request: getLastHistory } = useRequest({
    url: "/history/last-history",
    method: "post",
    body: { userId: user.id },
    onSuccessMessage: "Profile data updated successfully",
    hideErrorMessage: true,
    hideSuccessMessage: true,
    onSuccess: (response) => {
      setTripResponse(response.data);
    },
    onError(error, data) {},
    // headers: { 'Content-Type': 'multipart/form-data' },
  });

  const [state, setState] = useState([
    {
      startDate: new Date(tripResponse.start_date),
      endDate: null,
      key: "selection",
    },
  ]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <div>
        {/* <DateRangePicker
          onChange={(item) => setState({ ...state, ...item })}
          ranges={[state.selection1, state.selection2, state.selection3]}
        /> */}
        <DateRange
          editableDateInputs={true}
          //@ts-ignore
          onChange={(item) => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          //@ts-ignore
          ranges={state}
        />
      </div>
    </>
  );
}
