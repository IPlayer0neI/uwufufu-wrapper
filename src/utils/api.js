const notBodyMethod = {
       "GET": "GET",
       "DELETE": "DELETE"
}

export function api(path, token, opts) {
    /**
     * @type {RequestInit}
     */
    const opts = opts || {
        headers: {}
    }

    opts.method = opts.method || "POST";
    opts.headers["Authorization"] = "Bearer " + token;
    if (!opts.headers["Content-Type"] || !notBodyMethod[method]) {
        opts.headers["Content-Type"] = "application/json"
    }

    return fetch("https://api.uwufufu.com/v1/" + path, opts)
        .then(function (res) {
            return res.json();
        })
}