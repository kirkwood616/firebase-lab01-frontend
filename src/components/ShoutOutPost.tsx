// import "./ShoutOut.css";
import { ShoutOut } from "../models/ShoutOut";

interface Props {
  shout: ShoutOut;
}

function ShoutOutPost({ shout }: Props) {
  return (
    <div className="ShoutOutPost">
      <h3>Shout out to {shout.to}</h3>
      <p>- from {shout.from}</p>
      <p>{shout.shoutOut}</p>
    </div>
  );
}

export default ShoutOutPost;
