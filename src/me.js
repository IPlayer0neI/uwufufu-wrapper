/**
 * @typedef {object} MeReturn
 * @property {string} createdAt
 * @property {string} email
 * @property {number} id
 * @property {boolean} isVerified
 * @property {string} profileImage
 * @property {string} subscriptionEndDate
 * @property {string} tier
 * @property {string} updatedAt
 */

/**
 * @param {string} token 
 * @returns {Promise<MeReturn>}
 */
export function me(token) {
    /**
     * @type {RequestInit}
     */
    const opts = {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token
        }
    }

    return fetch("https://api.uwufufu.com/v1/auth/me", opts)
        .then(function (res) {
            return res.json()
        })
}