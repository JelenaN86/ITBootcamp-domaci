import axios from "axios"

export const getAllLaunches = () => {
    return axios.get("https://api.spacexdata.com/v4/launches/past")
}

export const getCompanyInfo = () => {
    return axios.get("https://api.spacexdata.com/v4/company")
}
