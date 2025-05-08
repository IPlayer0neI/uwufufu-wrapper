/**
 * @typedef {object} ImagesResponse
 * @property {string} filename
 * @property {string} key
 * @property {string} url
 */

/** 
 * @memberof UWUFufuApiWrapper
 * @param {Blob} cover Image blob
 * @param {string} covername File name
 * @returns {Promise<ImagesResponse>}
 */
export function images(cover, coverName) {
    const coverFormDataBody = new FormData();
    coverFormDataBody.append("file", cover, coverName);
    coverFormDataBody.append("type", "cover");
    console.log(coverFormDataBody)

    /**
     * @type {RequestInit}
     */
    const opts = {
        body: coverFormDataBody
    }

    return this.api("images", opts);
}