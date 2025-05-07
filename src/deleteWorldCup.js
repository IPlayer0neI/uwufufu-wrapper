/**
 * @typedef {object} DeletedWorldCupResponse
 * @property {"Game deleted successfully"} message
 */

/**
 * Pega infirmações sobre o usuário.
 * @param {number} token token para acessar a api.
 * @returns {Promise<DeletedWorldCupResponse>}
 */
export function deleteWorldCup(id, token) {
    /**
    * @type {RequestInit}
    */
    const opts = {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + token,
        }
    }

    return fetch(`https://api.uwufufu.com/v1/games/${id}`, opts)
        .then(function (res) {
            return res.json()
        })
}