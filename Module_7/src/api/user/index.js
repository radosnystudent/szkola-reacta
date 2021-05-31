const axios = require("axios");

export default function getRandomUsers() {
    return axios
        .get("https://randomuser.me/api/?results=12")
        .then((response) => response.data.results);
}
