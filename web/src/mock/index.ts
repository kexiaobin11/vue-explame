import Mock from 'mockjs'
import User from "@/entity/user";

Mock.setup({
    timeout:'200-600'
})

const userList =[
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'John',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Morgan',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Jessy',
        address: 'No. 189, Grove St, Los Angeles',
    }
] as User[];

// 模拟根据用户名获取用户信息
Mock.mock(RegExp('/api/user/getByUsername' + '.*'), 'get', (option => {
    return {
        status: 200,
        data: {
            name: '超级管理员',
            username: '13927029761'
        },
        success: true,
        message: '成功'
    }
}))

Mock.mock('/api/user/login', 'post', (option) => {
  const { username, password } = JSON.parse(option.body);
  if (username === '13927029761' && password === 'yunzhi') {
      return {
          status: 200,
          data: {
              accessToken:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjIyODA1MjAxMjhAcXEuY29tIiwic3ViIjo5LCJpYXQiOjE2MjU4MzQ3MTksImV4cCI6MTYyODQyNjcxOX0.YQLVi-zw4XWQEd8Hy2YZGlFaqX8c7xyRPrYuxcFywFE'
          },
          success: true,
          message: '成功'
      }
  }
  if (username === 'zhangsan' && password === 'yunzhi') {
      return {
          status: 0,
          data: {
              accessToken:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjIyODA1MjAxMjhAcXEuY29tIiwic3ViIjo5LCJpYXQiOjE2MjU4MzQ3MTksImV4cCI6MTYyODQyNjcxOX0.YQLVi-zw4XWQEd8Hy2YZGlFaqX8c7xyRPrYuxcFywFE'
          },
          success: true,
          message: '成功'
      }
  }
  return {
      status: 0,
      data: null,
      message: '账户或者密码错误'
    }
})