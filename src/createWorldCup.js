/**
 * {
 *  "id":0,
 *  "title":"Worlcup name",
 *  "description":"Worldcup description",
 *  "visibility":"IS_CLOSED",
 *  "categoryId":19,
 *  "isNsfw":false,
 *  "createdAt":"2025-05-05T23:40:11.739Z",
 * "updatedAt":"2025-05-05T23:40:11.739Z"
 * }
 * @class
 * @param {CreateWorldCupBody} model
 */
function CreateWorldCupBody(model) {
    /**
     * @type {number|19} 
     */
    this.categoryId = model.categoryId || 19;
    /**
     * @type {string}
     */
    this.createdAt = model.createdAt;
    /**
     * @type {string}
     */
    this.description = model.description;
    /**
     * @type {number|0}
     */
    this.id = model.id || 0;
    /**
     * @type {boolean|false}
     */
    this.isNsfw = model.isNsfw || false;
    /**
     * @type {string}
     */
    this.title = model.title;
    /**
     * @type {string}
     */
    this.updateAt = model.updateAt;
    /**
     * @type {"IS_CLOSED"|"IS_PRIVATE"|"IS_PUBLIC"}
     */
    this.visibility = model.visibility;
}

/**
 * @typedef {object} CreateWorldCupResponse
 * @property {number} id
 * @property {string} description
 * @property {string} visibility
 * @property {string} coverImage
 * @property {string} slug
 * @property {boolean} isNsfw
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
 * Pega infirmações sobre o usuário.
 * @memberof UWUFufuApiWrapper
 * @param {CreateWorldCupBody} model
 * @returns {Promise<CreateWorldCupResponse>}
 */
export function createWorldCup(model) {
    /**
    * @type {RequestInit}
    */
    const opts = {
        body: JSON.stringify(new CreateWorldCupBody(model))
    }

    return this.api("games", opts)
}