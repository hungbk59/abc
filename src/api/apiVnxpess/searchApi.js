import axiosClient from "./axiosClient"

const SearchApi = {
    getAll: (params) => {
        const url = '/?results=100'
        return axiosClient.get(url, { params })
    },
    get: (id) => {
        const url = `/?results=${id}`
        return axiosClient.get(url)
    }
}

export default SearchApi