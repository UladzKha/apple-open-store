import axios from "axios";
import { useEffect, useState } from "react";
import AppBar from "../AppBar/AppBar";

export default function Home() {
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://us-central1-apple-open-store.cloudfunctions.net/getApplications"
      )
      .then(({ data }) => {
        setApplications(data.slice(0, 5));
      })
      .catch((error) => console.log(error));
  }, []);

  function renderApplications() {
    return applications.map((application) => <AppBar app={application} />);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: 1000,
          alignItems: "center",
        }}
      >
        <h1>New and updated apps</h1>
        <button
          type="button"
          style={{
            backgroundColor: "#689f38",
            height: 31,
            width: 85,
            color: "white",
            borderRadius: 5,
            fontWeight: "bold",
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          See more
        </button>
      </div>
      <div style={{ display: "flex" }}>{renderApplications()}</div>
      <h1>New and updated apps</h1>
    </>
  );
}
