import config from "config";
import { connect } from "mongoose";

const url: string = config.get("db.url");

const connection = connect(url);

export default connection;
