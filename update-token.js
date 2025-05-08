/**
 * @file Code that helps create a valid token and save it for development purposes.
 */

import 'dotenv/config';
import { UWUFufuApiWrapper } from "./src/lib.js";
import fs from "fs";

const api = new UWUFufuApiWrapper();

api.login(process.env.EMAIL, process.env.PASSWORD)
    .then(function (json) {
        console.log(json)
        fs.writeFileSync("token.json", JSON.stringify(json));
    })