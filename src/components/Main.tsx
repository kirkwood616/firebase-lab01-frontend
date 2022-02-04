// import "./Main.css";
import { useEffect, useState } from "react";
import { ShoutOut } from "../models/ShoutOut";
import { fetchShoutOuts } from "../services/ShoutOutApiService";
import ShoutOutForm from "./ShoutOutForm";
import ShoutOutsList from "./ShoutOutsList";

function Main() {
  const [shoutOuts, setShoutOuts] = useState<ShoutOut[]>([]);
  // console.log(shoutOuts);

  function handleShoutOuts(shoutOut: ShoutOut) {
    setShoutOuts((prev) => [...shoutOuts, shoutOut]);
  }

  useEffect(() => {
    fetchShoutOuts().then((data) => setShoutOuts(data));
  }, []);

  return (
    <div className="Main">
      <ShoutOutsList shouts={shoutOuts} />
      <ShoutOutForm onSubmit={handleShoutOuts} />
    </div>
  );
}

export default Main;
