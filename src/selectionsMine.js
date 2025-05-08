/**
 * @typedef {object} SelectionsObject
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
 * @typedef {object} SelectionsMineResponse
 * @property {number} page
 * @property {number} perPage
 * @property {number} total
 * @property {SelectionsObject[]} data
 */

/**
 * @memberof UWUFufuApiWrapper
 * @param {number} id Selection id
 * @param {number} [page=1]  Selected page
 * @param {number} [perPage=10] Data per page
 * @param {string} [keyword=""] Text for search
 * @param {"name"|"createdAt"|"winLossRatio"|"finalWinLossRatio"} [sortBy="name"] Ordering form
 * @returns {Promise<SelectionsMineResponse>}
 */
export function selectionsMine(id, page, perPage, keyword, sortBy) {
    /**
     * @type {RequestInit}
     */
    const opts = {
        method: "GET"
    }

    return this.api(`selections/mine?worldcupId=${id}&page=${page}&perPage=${perPage}&keyword=${keyword}&sortBy=${sortBy}`, opts)
}