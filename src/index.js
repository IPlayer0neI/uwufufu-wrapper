import { createWorldCup } from "./createWorldCup.js"
import { deleteWorldCup } from "./deleteWorldCup.js"
import { games } from "./games.js"
import { gamesIdMine } from "./gamesIdMine.js"
import { gamesMine } from "./gamesMine.js"
import { images } from "./images.js"
import { login } from "./login.js"
import { me } from "./me.js"
import { selectionsDelete } from "./selectionsDelete.js"
import { selectionsImage } from "./selectionsImage.js"
import { selectionsMine } from "./selectionsMine.js"
import { selectionsPatch } from "./selectionsPatch.js"
import { selectionsVideo } from "./selectionsVideo.js"
import { selectionsVideoDelete } from "./selectionsVideoDelete.js"
import { selectionsVideoPatch } from "./selectionsVideoPatch.js"
import { updateWorldCup } from "./updateWorldCup.js"

import { fileToBlob } from "./utils/fileToBlob.js"

/**
 * @class
 * @namespace
 * @param {string} token 
 * @param {boolean} consoleApiResponse
 */
export function UWUFufuApiWrapper(token, consoleApiResponse) {
    this.token = token || null;
    this.notBodyMethod = {
        "GET": "GET",
        "DELETE": "DELETE"
    }
    this.consoleApiResponse = consoleApiResponse || false;

    /**
     * @param {string} path 
     * @param {RequestInit} opts Default: method="POST"; Content-Type="application/json"
     * @returns {Promise<object>}
     */
    this.api = function (path, opts) {
        /**
         * @type {RequestInit}
         */
        const options = opts || {
            headers: {}
        }

        if (!options.headers) {
            options.headers = {};
        }

        options.method = options.method || "POST";
        if (this.token) {
            options.headers["Authorization"] = "Bearer " + this.token;
        }


        if ((!options.headers["Content-Type"] && !this.notBodyMethod[options.method]) && !(options.body instanceof FormData)) {
            options.headers["Content-Type"] = "application/json";
        }

        console.log(options)
        return fetch("https://api.uwufufu.com/v1/" + path, options)
            .then((res) => res.json())
            .then((json) => {
                this.consoleApiResponse && console.log(json);
                return json;
            })
    }

    this.createWorldCup = createWorldCup;
    this.deleteWorldCup = deleteWorldCup
    this.gamesIdMine = gamesIdMine;
    this.gamesMine = gamesMine;
    this.images = images;
    this.login = login;
    this.me = me;
    this.selectionsDelete = selectionsDelete;
    this.selectionsImage = selectionsImage;
    this.selectionsMine = selectionsMine;
    this.selectionsPatch = selectionsPatch;
    this.selectionsVideo = selectionsVideo;
    this.selectionsVideoDelete = selectionsVideoDelete;
    this.selectionsVideoPatch = selectionsVideoPatch;
    this.updateWorldCup = updateWorldCup;
    this.games = games;
    this.fileToBlob = fileToBlob;
}