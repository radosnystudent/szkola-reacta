export default function getUsers() {
    const config = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    };

    return fetch("./users.json", config).then((response) => response.json());
}
