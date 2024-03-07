import Mock from 'mockjs'

Mock.setup({
    timeout:'200-600'
})

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