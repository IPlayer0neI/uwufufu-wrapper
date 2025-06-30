/**
 * @typedef {object} GamesIdMineResponse
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
 * Pass a specific user's worldcup.
 * @memberof UWUFufuApiWrapper
 * @param {number} id Worldcup id
 * @returns {Promise<GamesIdMineResponse>}
 */
export function gamesIdMine(id) {
    /**
     * @type {RequestInit}
     */
    const opts = {
        method: "GET"
    }

    return this.api(`games/${id}/mine`, opts)
}