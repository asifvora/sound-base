'use strict';

const request = {
    get: (url) => {
        return fetch(url)
            .then((resp) => {
                return resp.json();
            })
            .then((resp) => {
                return resp
            }).catch((err) => {
                return err;
            });
    },
}

export { request };