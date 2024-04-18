import request from '@/utils/request'

const loginApi = {
    userLogin: '/api/user/login',
    getByUsername: '/api/user/getByUsername',
    getAll: '/api/user/getAll'
}

class UserService {
    static postLogin(data: { username: string, password: string }) {
        
        return request({
            url: loginApi.userLogin, method: 'POST', json: true, data
        }).then((res) => {
            if (res.status === 200) {
                return Promise.resolve(res)
            }
            return Promise.reject(res);
        })
    }

    static getUserInfo(data: string) {
        return request({
            url: loginApi.getByUsername,
            method: 'get',
            params: {username: data},
            json: true,
        }).then((res) => {
            if (res.status === 200) {
                return Promise.resolve(res)
            }
            return Promise.reject(res)
        })
    }

    static getAll() {
        return request({
            url: loginApi.getAll,
            method: 'get',
            json: true,
        }).then((res) => {
            if (res.status === 200) {
                return Promise.resolve(res)
            } else {
                return Promise.reject(res)
            }
        })
    }
}

export default UserService