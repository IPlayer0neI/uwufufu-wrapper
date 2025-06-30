/**
 * Search for worldcups available for play
 * @memberof UWUFufuApiWrapper
 * @param {number} [page=1]  Selected page
 * @param {number} [perPage=10] Data per page
 * @param {"latest"|"popularity"} [sortBy="latest"] Ordering form
 * @param {string} [search=""] Text for search
 * @param {boolean} [includeNsfw=false] Include nsfw
 * @param {string} locale Choice of language
 * @param {string} categories Choosing a category
 * @returns {Promise<SelectionsMineResponse>}
 */
export function games(page = 1, perPage = 10, sortBy = "popularity", search = "", includeNsfw = false, locale, categories){
    /**
     * @type {RequestInit}
     */
    const opts = {
        method: "GET"
    }

    const localeQuery = locale ? `&locale=${locale}`: "";
    const categoriesQuery= categories ? `&categories=${categories}`: "";

    this.api(`games?page=${page}&perPage=${perPage}&sortby=${sortBy}&search=${search}&includeNsfw=${includeNsfw}${localeQuery}${categoriesQuery}`, opts)
}