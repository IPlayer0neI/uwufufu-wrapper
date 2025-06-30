/**
 * @typedef {object} GamesObject
 * @property {number} id
 * @property {string} description
 * @property {string} visibility
 * @property {string} coverImage
 * @property {string} slug
 * @property {boolean} isNsfw
 * @property {string} category
 * @property {string} locale
 * @property {string} createdAt
 * @property {string} updateAt
 * @property {object} user
 * @property {number} user.id
 * @property {string} user.name
 * @property {string} user.profileImage
 * @property {number} plays
 * @property {number} finishedPlays
 */

/**
 * @typedef {object} GamesMineResponse
 * @property {number} page
 * @property {number} perPage
 * @property {number} total
 * @property {GamesObject[]} worldcups
 */

/**
 * Pass user games.
 * @memberof UWUFufuApiWrapper
 * @param {number} [page=1] Selected page
 * @param {number} [perPage=15] Data per page
 * @returns {Promise<GamesMineResponse>}
 */
export function gamesMine(page = 1, perPage = 15) {
    /**
     * @type {RequestInit}
     */
    const opts = {
        method: "GET"
    }

    return this.api(`games/mine?page=${page}&perPage=${perPage}`, opts);
}