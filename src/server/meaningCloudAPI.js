const key = '07decbaf0b113093a54df50422ffb030'
const APIUrl = 'https://api.meaningcloud.com/sentiment-2.1?'
const fetch = require("node-fetch")

const analysisNewsFromUrl = async (url) => {
    query = {
        key: key,
        of: 'json',
        url: url,
        lang:'en'
    }
    url = APIUrl + Object.keys(query).map(k=>`${encodeURIComponent(k)}=${encodeURIComponent(query[k])}`).join('&')
    
    let resp = await  fetch(
        url,
        {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
    resp = await resp.json()
    return resp
}

module.exports = analysisNewsFromUrl