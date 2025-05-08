/**
 * @typedef {object} SelectionsVideoResponseDelete
 * @property {string} createdAt
 * @property {string} deletedAt
 * @property {number} endTime
 * @property {number} finalLosses
 * @property {number} finalWinLossRatio
 * @property {number} finalWins
 * @property {object} game
 * @property {string} game.coverImage
 * @property {string} game.createdAt
 * @property {string} game.deletedAt
 * @property {string} game.description
 * @property {number} game.finishedPlays
 * @property {number} game.id
 * @property {boolean} game.isNsfw
 * @property {string} game.locale
 * @property {string} game.mongoId
 * @property {boolean} game.nsfwLockedByAdmin
 * @property {number} game.plays
 * @property {string} game.slug
 * @property {string} game.title
 * @property {string} game.updateAt
 * @property {string} game.visibility
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
 * @memberof UWUFufuApiWrapper
 * @param {number} id Selection id
 * @returns {Promise<SelectionsVideoResponseDelete>}
 */
export function selectionsVideoDelete(id) {
    /**
     * @type {RequestInit}
     */
    const opts = {
        method: "DELETE"
    }

    return this.api(`selections/${id}`, opts)
}