/**
 * {
 * "id":85475,
 * "title":"Worldcup name",
 * "description":"Worldcup description",
 * "visibility":"IS_CLOSED",
 * "coverImage":null,
 * "slug":"worldcup-name-author-name",
 * "isNsfw":false,
 * "category":null,
 * "locale":"pt-BR",
 * "createdAt":"2025-05-05T23:40:10.655Z",
 * "updatedAt":"2025-05-05T23:40:10.655Z",
 * "user":{
 *    "id":16941,
 *    "name":"Author name",
 *    "profileImage":null
 * },
 * "plays":0,
 * "finishedPlays":0,
 * "categoryId":14
 * }
 * @class
 * @param {UpdateWorldCupBody} model 
 */
function UpdateWorldCupBody(model) {
    /**
     * @type {object}
     * @property {number} id
     * @property {string} name
     */
    this.category = model.category
    /**
     * @type {number}
     */
    this.categoryId = model.categoryId;
    /**
     * @type {string}
     */
    this.coverImage = model.coverImage;
    /**
     * @type {string}
     */
    this.createdAt = model.createdAt;
    /**
     * @type {string}
     */
    this.description = model.description;
    /**
     * @type {number}
     */
    this.finishedPlays = model.finishedPlays;
    /**
     * @type {string}
     */
    this.id = model.id;
    /**
     * @type {boolean}
     */
    this.isNsfw = model.isNsfw;
    /**
     * @type {string}
     */
    this.locale = model.locale;
    /**
     * @type {string}
     */
    this.title = model.title;
    /**
     * @type {string}
     */
    this.updateAt = model.updateAt;
    /**
     * @type {object}
     * @property {number} id
     * @property {string} name
     * @property {string} profileImage
     */
    this.user = model.user;
    /**
     * @type {"IS_CLOSED"|"IS_PRIVATE"|"IS_PUBLIC"}
     */
    this.visibility = model.visibility;
}

/**
 * @typedef {object} UpdateWorldCupResponse
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {string} visibility
 * @property {string} coverImage
 * @property {string} slug
 * @property {boolean} isNsfw
 * @property {object} category
 * @property {number} category.id
 * @property {string} category.name
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
 * Update a worldcup.
 * @memberof UWUFufuApiWrapper
 * @param {number} id Worldcup id
 * @param {UpdateWorldCupBody} model
 * @returns {Promise<UpdateWorldCupResponse>}
 */
export function updateWorldCup(id, model) {
    /**
    * @type {RequestInit}
    */
    const opts = {
        method: "PUT",
        body: JSON.stringify(new UpdateWorldCupBody(model))
    }

    return this.api(`games/${id}`, opts);
}