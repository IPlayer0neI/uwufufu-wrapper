/**
 * @typedef {object} LoginResponse
 * @property {string} accessToken token para acessar a api.
 */

/**
 * Função para login no uwufufu.
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

    return this.api("auth/login", opts);
}