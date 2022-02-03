import axios from "axios";
import { ShoutOut } from "../models/ShoutOut";

export function fetchShoutOuts(): Promise<ShoutOut[]> {
  return axios
    .get("http://localhost:5001/fb-lab01-backend/us-central1/api/shout-outs")
    .then((res) => res.data);
}

export function postShoutOut(shoutOut: ShoutOut): Promise<ShoutOut> {
  return axios
    .post<ShoutOut>(
      "http://localhost:5001/fb-lab01-backend/us-central1/api/shout-outs",
      shoutOut
    )
    .then((res) => res.data);
}
