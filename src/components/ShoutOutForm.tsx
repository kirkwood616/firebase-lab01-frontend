// import "./ShoutOutForm.css";
import { FormEvent, useState } from "react";
import { ShoutOut } from "../models/ShoutOut";
import { postShoutOut } from "../services/ShoutOutApiService";

interface Props {
  onSubmit: (shoutOut: ShoutOut) => void;
}

function ShoutOutForm({ onSubmit }: Props) {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [shoutOut, setShoutOut] = useState("");

  function handleShoutSubmit(e: FormEvent) {
    e.preventDefault();
    let newShoutOut: ShoutOut = {
      to: to,
      from: from,
      shoutOut: shoutOut,
    };
    postShoutOut(newShoutOut);
    onSubmit(newShoutOut);
    setTo("");
    setFrom("");
    setShoutOut("");
  }

  return (
    <div className="ShoutOutForm">
      <h2>Leave a Shout Out</h2>
      <form onSubmit={handleShoutSubmit}>
        <label htmlFor="to">
          <p className="formLabel">To</p>
        </label>
        <input
          type="text"
          name="to"
          id="to"
          placeholder="Name"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <label htmlFor="from">
          <p className="formLabel">From</p>
        </label>
        <input
          type="text"
          name="from"
          id="from"
          placeholder="Name"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <label htmlFor="shoutOut">
          <p className="formLabel">Shout Out</p>
        </label>
        <textarea
          name="shoutOut"
          id="shoutOut"
          value={shoutOut}
          onChange={(e) => setShoutOut(e.target.value)}
        />
        <button type="submit">Submit Shout Out!</button>
      </form>
    </div>
  );
}

export default ShoutOutForm;
