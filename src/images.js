/**
 * @typedef {object} ImagesResponse
 * @property {string} filename
 * @property {string} key
 * @property {string} url
 */

/** 
 * @param {string} token 
 * @param {Blob} cover Image blob
 * @param {string} covername File name
 * @returns {Promise<ImagesResponse>}
 */
export function images(token, cover, coverName) {
    const coverFormDataBody = new FormData();
    coverFormDataBody.append("file", cover, coverName);
    coverFormDataBody.append("type", "cover");
    console.log(coverFormDataBody)

    /**
     * @type {RequestInit}
     */
    const opts = {
        method: "POST",
        body: coverFormDataBody,
        headers: {
            "Authorization": "Bearer " + token
        }
    }

    return fetch("https://api.uwufufu.com/v1/images", opts)
        .then(function (res) {
            return res.json()
        })
}