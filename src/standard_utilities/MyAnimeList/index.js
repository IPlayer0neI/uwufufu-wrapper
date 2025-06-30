import 'dotenv/config';

function getMyList() {
    /**
     * @type {RequestInit}
     */
    const opts = {
        headers: {
            "X-MAL-CLIENT-ID": process.env.XMALCLIENTID
        }
    }
    fetch("https://api.myanimelist.net/v2/anime?q=one&limit=4", opts).then(function(res){
        return res.json()
    }).then(function(json){
        console.log(json.data)
    })
}

getMyList()