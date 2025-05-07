/**
 * {
 * "worldcupId":85475,
 * "resourceUrl":"https://youtu.be/video",
 * "startTime":0,
 * "endTime":0
 * }
 * @class
 * @param {SelectionsVideoBody} model 
 */
function SelectionsVideoBody(model) {
    /**
     * @type {number}
     */
    this.worldcupId = model.worldcupId;
    /**
     * @type {string}
     */
    this.resourceUrl = model.resourceUrl;
    /**
     * @type {number|0}
     */
    this.startTime = model.startTime || 0;
    /**
     * @type {number|0}
     */
    this.endTime = model.endTime || 0;
}

/**
 * @typedef {object} SelectionsVideoResponse
 * @property {string} createdAt
 * @property {string} deletedAt
 * @property {number} endTime
 * @property {number} finalLosses
 * @property {number} finalWinLossRatio
 * @property {number} finalWins
 * @property {object} game
 * @property {number} game.id
 * @property {number} gameId
 * @property {number} id
 * @property {boolean} isVideo
 * @property {number} losses
 * @property {string} name
 * @property {string} resourceUrl
 * @property {number} startTime
 * @property {string} updatedAt
 * @property {string} videoSource
 * @property {string} videoUrl
 * @property {number} winLossRatio
 * @property {number} wins
 */

/** 
 * @param {string} token 
 * @param {SelectionsVideoBody} model
 * @returns {Promise<SelectionsVideoResponse>}
 */
export function selectionsVideo(token, model) {
    /**
     * @type {RequestInit}
     */
    const opts = {
        method: "POST",
        body: JSON.stringify(new SelectionsVideoBody(model)),
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        }
    }

    return fetch("https://api.uwufufu.com/v1/selections/video", opts)
        .then(function (res) {
            return res.json()
        })
}