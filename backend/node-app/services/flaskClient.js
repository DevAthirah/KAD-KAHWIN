const axios = require("axios");

const flask = axios.create({
    baseURL: "http://127.0.0.1", //"http://unix:/var/www/kadkahwin/backend/flask-app/flask.sock:",
    timeout: 3000,
});

module.exports = flask;
