import request from '@/utils/request'

const technologyApi = {
    getAll: '/api/technology/getAll',
    getAllCategory: '/api/technology/getAllCategory',
    getByName: '/api/technology/getByName'
}

class TechnologyService {
    static getAll() {
        return request({
            url: technologyApi.getAll,
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

    static getAllCategory() {
        return request({
            url: technologyApi.getAllCategory,
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

    static getByName(data: string) {
        return request({
            url: technologyApi.getByName,
            method: 'get',
            json: true,
            params: { name: data }
        }).then((res) => {
            if (res.status === 200) {
                return Promise.resolve(res)
            } else {
                return Promise.reject(res)
            }
        })
    }
}

export default TechnologyService
