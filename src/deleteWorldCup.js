/**
 * @typedef {object} DeletedWorldCupResponse
 * @property {"Game deleted successfully"} message
 */

/**
 * Delete a worldcup.
 * @memberof UWUFufuApiWrapper
 * @param {number} id Worldcup id
 * @returns {Promise<DeletedWorldCupResponse>}
 */
export function deleteWorldCup(id) {
    /**
    * @type {RequestInit}
    */
    const opts = {
        method: "DELETE"
    }

    return this.api(`games/${id}`, opts)
}