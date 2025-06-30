/**
 * @typedef {object} SelectionsImageResponse
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
 * Create an image selection
 * @memberof UWUFufuApiWrapper
 * @param {number} id Worldcup id
 * @param {Blob} image Image blob
 * @param {string} imageName Image name
 * @returns {Promise<SelectionsImageResponse>}
 */
export function selectionsImage(id, image, imageName) {
    const coverFormDataBody = new FormData();
    coverFormDataBody.append("file", image, imageName);
    coverFormDataBody.append("type", "selection");
    coverFormDataBody.append("worldcupId", id);

    /**
     * @type {RequestInit}
     */
    const opts = {
        body: coverFormDataBody
    }

    return this.api("selections/image", opts)
}