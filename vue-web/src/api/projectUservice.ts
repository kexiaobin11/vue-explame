import request from '@/utils/request'

const projectAPi = {
    getAll: '/api/project/getAll'
}

class ProjectService {
    static getAll() {
        return request({
            url: projectAPi.getAll,
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

export default ProjectService
