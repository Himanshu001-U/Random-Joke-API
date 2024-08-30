import http from "http"
import axios from "axios"
import { request } from "https";

const port = 6969;
const randomJoke = async () => {
    const response = await axios.get("http://icanhazdadjoke.com", {
        headers: {
            "Accept": "application/json"
        }
    });

    return response.data.joke;
}
randomJoke();

const server = http.createServer(async(request, response) => {
    if (request.method === "GET") {
        response.writeHead(200, { "Content-Type": "application/json" });
        const joke = await randomJoke();
        response.end(JSON.stringify(joke));
    }
})

server.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})