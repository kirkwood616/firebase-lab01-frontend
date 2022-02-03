import { useState, useEffect } from "react";
import { ShoutOut } from "../models/ShoutOut";
import { fetchShoutOuts } from "../services/ShoutOutApiService";
import ShoutOutPost from "./ShoutOutPost";
// import "./ShoutOuts.css";

interface Props {
  shouts: ShoutOut[];
}

function ShoutOutsList({ shouts }: Props) {
  return (
    <div className="ShoutOutsList">
      <h1>All Shout Outs</h1>
      <div className="shoutOutsListContainer">
        {shouts.map((shout, index) => (
          <ShoutOutPost key={index} shout={shout} />
        ))}
      </div>
    </div>
  );
}

export default ShoutOutsList;
