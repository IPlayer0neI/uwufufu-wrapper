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
 * Pass user information
 * @memberof UWUFufuApiWrapper
 * @returns {Promise<MeReturn>}
 */
export function me() {
    /**
     * @type {RequestInit}
     */
    const opts = {
        method: "GET",
    }

    return this.api("auth/me", opts)
}