'use strict';

const axios = require('axios');


axios.interceptors.request.use(request => 
{
    //console.log('Starting Request', JSON.stringify(request, null, 2))
    return request
});

async function sendGetRequest(url) 
{
    try 
    {
        const resp = await axios.get(url, {
            
            headers: 
            {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36',                
                'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9; charset=utf-8',
                'Accept-Encoding' : 'gzip, deflate, sdch, br',
                'Accept-Language' : 'en-US,en;q=0.5',
                'Content-Type': 'text/html; charset=utf-8',
                'Connection' : 'keep-alive',
                'Host' : 'www.societe.com',
                'Sec-Fetch-Dest' : 'document',
                'Sec-Fetch-Mode' : 'navigate',
                'Sec-Fetch-Site' : 'none',
                'Sec-Fetch-User' : '?1',
                'Upgrade-Insecure-Requests' : '1'

            },
            xsrfCookieName : null,
            xsrfHeaderName : null,
            responseType:'arraybuffer'
        });

        return resp;
    }
    catch(err)
    {
        //console.error(err);
    }
};


// let url = 'https://www.societe.com/societe/ale-international-602033185.html';

// (async() => 
// {
//     let response  = await sendGetRequest(url);

//     console.log(response);
// })();

module.exports = 
{
    getSociete : sendGetRequest
}