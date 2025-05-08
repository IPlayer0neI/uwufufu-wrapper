/**
 * {
 * "gameId":85475,
 * "selectionId":6640380,
 * "name":"Selection name",
 * "resourceUrl":"https://cdn.uwufufu.com/selection/image.jpg",
 * "videoUrl":"https://cdn.uwufufu.com/selection/image.jpg",
 * "startTime":0,
 * "endTime":0
 * }
 * @class
 * @param {SelectionsPatchBody} model 
 */
function SelectionsPatchBody(model) {
    /**
     * @type {number|0} 
     */
    this.endTime = model.endTime || 0;
    /**
     * @type {number}
     */
    this.gameId = model.gameId;
    /**
     * @type {string}
     */
    this.name = model.name;
    /**
     * @type {string}
     */
    this.resourceUrl = model.resourceUrl;
    /**
     * @type {number}
     */
    this.selectionId = model.selectionId;
    /**
     * @type {number|0}
     */
    this.startTime = model.startTime || 0;
    /**
     * @type {string}
     */
    this.videoUrl = model.videoUrl;
}

/**
 * @typedef {object} SelectionsPatchResponse
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
 * Para atualizar uma imagem, é necessário criar a imagem como cover e adicona-la no resourceUrl 
 * @memberof UWUFufuApiWrapper
 * @param {SelectionsPatchBody} model 
 * @returns {Promise<SelectionsPatchResponse>}
 */
export function selectionsPatch(model) {
    /**
     * @type {RequestInit}
     */
    const opts = {
        method: "PATCH",
        body: JSON.stringify(new SelectionsPatchBody(model)),
    }

    return this.api("selections", opts)
}