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
        setApplications(data);
      })
      .catch((error) => console.log(error));
  }, []);

  function renderApplications() {
    return applications.map((application) => <AppBar app={application} />);
  }

  return (
    <>
      <h1>New and updated apps</h1>
      <div style={{ display: "flex" }}>{renderApplications()}</div>
      <h1>New and updated apps</h1>
    </>
  );
}
