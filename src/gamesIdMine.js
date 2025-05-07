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
 * @param {number} id Worldcup id
 * @param {string} token token para acessar a api.
 * @returns {Promise<GamesIdMineResponse>}
 */
export function gamesIdMine(id, token) {
    /**
     * @type {RequestInit}
     */
    const opts = {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token,
        }
    }

    return fetch(`https://api.uwufufu.com/v1/games/${id}/mine`, opts)
        .then(function (res) {
            return res.json()
        })
}