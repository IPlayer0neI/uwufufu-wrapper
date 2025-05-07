import fs from "fs"

/**
 * 
 * @param {string} path Image path
 * @param {string} type Image type
 * @returns {Blob}
 */
export function fileToBlob(path, type){
    const fileBuffer = fs.readFileSync(path)
    const blob = new Blob([fileBuffer], { type: type })
    return blob;
}