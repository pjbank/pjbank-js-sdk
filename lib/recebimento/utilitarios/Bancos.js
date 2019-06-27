'use strict';

const APIClient = require('pjbank-api-client');

module.exports = (() => {

    const endpoint = "bancos";
    
    const headers = {
        "Content-type": "application/json"
    };

    return APIClient.get(endpoint, {}, headers);

});
