import axios from "axios"
import { mainUrl } from "./index"

export async function getProds() {
    let result
    result = await axios(mainUrl + "/products").then(res => {
        return res.data
    })
    return result
}
export async function getProd(id) {
    let result
    result = await axios(mainUrl + "/products/" + id).then(res => {
        return res.data
    })
    return result
}