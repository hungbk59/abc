import axiosClient from "./axiosClient"

const LoginApi = {
    post: (params) => {
        const url = '/login'
        return axiosClient.post(url, {params})
    }
}

export default LoginApi