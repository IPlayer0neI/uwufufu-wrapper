/**
 * @typedef {object} LoginResponse
 * @property {string} accessToken token 
 */

/**
 * Pass the API token.
 * @memberof UWUFufuApiWrapper
 * @param {string} email
 * @param {string} password
 * @returns {Promise<LoginResponse>}
 */
export function login(email, password) {
    /**
     * @type {RequestInit}
     */
    const opts = {
        body: JSON.stringify({
            email: email,
            password: password
        })
    }

    return this.api("auth/login", opts)
        .then((res) => {
            this.token = res.accessToken
            return res
        });
}