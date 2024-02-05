import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:5555/"//TODO redo urls in server.js to /mvp/store/items AND TEST them.
})