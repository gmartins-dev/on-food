import axios from "axios";

export const api = axios.create({

    baseURL: "https://api.imersaofx.danieldcs.com/"
    headers: {
        Authorization: "Bearer [Z21hcnRpbnMxMzA5QGdtYWlsLmNvbQ==]"
    }
})