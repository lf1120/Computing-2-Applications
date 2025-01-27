const Ajax = Object.create(null);

const fetch = window.fetch;

const json = (response) => response.json();

Ajax.query = function (requestObj) {
    // return Promise.resolve({
    //     "reply": "It's a fake!"
    // });
    //commento di prova

    const body = JSON.stringify(requestObj);

    return fetch("/", {
        "method": "POST",
        "body": body,
        "headers": {
            "Content-Type": "application/json"
        }
    }).then(json);
};

export default Object.freeze(Ajax);
