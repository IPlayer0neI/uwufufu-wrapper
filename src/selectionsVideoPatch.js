/**
 * When changing the YouTube video, you need to send the thumb link of the old video.
 * {
 * "gameId":85475,
 * "selectionId":6640429,
 * "name":"Selection name",
 * "resourceUrl":"https://img.youtube.com/vi/image/sddefault.jpg",
 * "videoUrl":"https://www.youtube.com/embed/image",
 * "startTime":0,
 * "endTime":110
 * }
 * @class
 * @param {SelectionsVideoPatchBody} model
 */
function SelectionsVideoPatchBody(model){
    /**
     * @type {number}
     */
    this.selectionId = model.selectionId;
    /**
     * @type {number}
     */
    this.gameId = model.gameId;
    /**
     * @type {string}
     */
    this.resourceUrl = model.resourceUrl
    /**
     * @type {number|0}
     */
    this.startTime = model.startTime || 0;
    /**
     * @type {number|0}
     */
    this.endTime = model.endTime || 0;
    /**
     * @type {string}
     */
    this.videoUrl = model.videoUrl;
    /**
     * @type {string}
     */
    this.name = model.name;
}

/**
 * @typedef {object} SelectionsVideoPatchResponse
 * @property {number} endTime
 * @property {number} finalLosses
 * @property {number} finalWins
 * @property {number} gameId
 * @property {number} id
 * @property {boolean} isVideo
 * @property {number} losses
 * @property {string} name
 * @property {string} resourceUrl
 * @property {number} startTime
 * @property {string} videoSource
 * @property {string} videoUrl
 * @property {number} winLossRatio
 * @property {number} wins
 */

/**
 * Change a video selection
 * @memberof UWUFufuApiWrappers
 * @param {SelectionsVideoPatchBody} model
 * @returns {Promise<SelectionsVideoPatchResponse>}
 */
export function selectionsVideoPatch(model) {
    /**
     * @type {RequestInit}
     */
    const opts = {
        method: "PATCH",
        body: JSON.stringify(new SelectionsVideoPatchBody(model)),
    }

    return this.api("selections", opts)
}