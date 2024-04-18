import Mock from 'mockjs'
//122
Mock.setup({
    timeout:'200-600'
})

const users = [
    {
        id:  1,
        name: "张三",
        username: "zhangsan",
        password: "hashed_password_1", // 示例密码，实际应用中应为哈希值
        phone: "13800138000"
    },
    {
        id:  2,
        name: "李四",
        username: "lisi",
        password: "hashed_password_2",
        phone: "13900139000"
    },
    {
        id:  3,
        name: "王五",
        username: "wangwu",
        password: "hashed_password_3",
        phone: "13700137000"
    },
    {
        id:  4,
        name: "赵六",
        username: "zhaoliu666",
        password: "$2y$10$X/w75.8aHlE.l3i55mU7O/Tq0bK9Jd08nUq.H6/oW.g0sxC09pO", // 示例哈希密码
        phone: "13600136004"
    },
    {
        id:  5,
        name: "孙七",
        username: "sunqi_777",
        password: "$2y$10$M1x7rP5v8w.24f9F.Q/7U/p5bYqO/h2fZ630.oQ.Xc6.K/4wSe", // 示例哈希密码
        phone: "13500135005"
    },
    {
        id:  6,
        name: "周八",
        username: "zhouba888",
        password: "$2y$10$N/19zXc.iFl/R/fEOZ5i.uI17xQ.p5O1ZvnO/Z46G8Q.LEm1yYu", // 示例哈希密码
        phone: "13400134006"
    },
];


const projects = [
    {
        id: 1,
        name: "项目A",
        createdAt: "2023-04-01T10:00:00Z",
        repositoryUrl: "https://github.com/exampleuser/project-a.git",
        platform: "GitHub",
        technologies: [{
            name: "React"
        },
            {
                name: "Node.js"
            }
        ],
        status: "公开"
    },
    {
        id: 3,
        name: "项目B",
        createdAt: "2023-03-15T15:30:00Z",
        repositoryUrl: "https://gitlab.com/exampleuser/project-b.git",
        platform: "GitLab",
        technologies: [{
            name: "React"
        },
            {
                name: "Node.js"
            }
        ],
        status: "私有"
    },
    {
        id: 4,
        name: "项目C",
        createdAt: "2023-02-20T09:15:00Z",
        repositoryUrl: "https://github.com/exampleteam/project-c.git",
        platform: "GitHub",
        technologies: [{
            name: "React"
        },
            {
                name: "Node.js"
            }
        ],
        status: "公开"
    },
    {
        id: 5,
        name: "项目D",
        createdAt: "2023-01-05T12:45:00Z",
        repositoryUrl: "https://gitlab.com/exampleteam/project-d.git",
        platform: "GitLab",
        technologies: [{
            name: "React"
        },
            {
                name: "Node.js"
            }
        ],
        status: "私有"
    },
    {
        id: 6,
        name: "项目E",
        createdAt: "2022-12-10T17:30:00Z",
        repositoryUrl: "https://bitbucket.org/exampleorg/project-e.git",
        platform: "Bitbucket",
        technologies: [{
            name: "React"
        },
            {
                name: "Node.js"
            }
        ],
        status: "内部"
    },
    {
        id: 7,
        name: "项目F",
        createdAt: "2022-11-15T14:15:00Z",
        repositoryUrl: "https://github.com/exampleorg/project-f.git",
        platform: "GitHub",
        technologies: [{
            name: "React"
        },
            {
                name: "Node.js"
            }
        ],
        status: "公开"
    },
    {
        id: 8,
        name: "项目G",
        createdAt: "2022-10-25T08:45:00Z",
        repositoryUrl: "https://gitlab.com/exampleorg/project-g.git",
        platform: "GitLab",
        technologies: [{
            name: "React"
        },
            {
                name: "Node.js"
            }
        ],
        status: "内部"
    },
    {
        id: 9,
        name: "项目H",
        createdAt: "2022-09-20T11:00:00Z",
        repositoryUrl: "https://bitbucket.org/exampleuser/project-h.git",
        platform: "Bitbucket",
        technologies: [{
            name: "React"
        },
            {
                name: "Node.js"
            }
        ],
        status: "私有"
    },
    {
        id: 10,
        name: "项目I",
        createdAt: "2022-08-10T16:30:00Z",
        repositoryUrl: "https://github.com/exampleuser/project-i.git",
        platform: "GitHub",
        technologies: [{
            name: "React"
        },
            {
                name: "Node.js"
            }
        ],
        status: "公开"
    },
    {
        id: 11,
        name: "项目J",
        createdAt: "2022-07-05T13:15:00Z",
        repositoryUrl: "https://gitlab.com/newteam/project-j.git",
        platform: "GitLab",
        technologies: [{
            name: "React"
        },
            {
                name: "Node.js"
            }
        ],
        status: "内部"
    },
    {
        id: 12,
        name: "项目K",
        createdAt: "2022-06-20T10:45:00Z",
        repositoryUrl: "https://bitbucket.org/newuser/project-k.git",
        platform: "Bitbucket",
        technologies: [{
            name: "React"
        },
            {
                name: "Node.js"
            }
        ],
        status: "公开"
    },
    {
        id: 13,
        name: "项目L",
        createdAt: "2022-05-15T18:00:00Z",
        repositoryUrl: "https://github.com/neworg/project-l.git",
        platform: "GitHub",
        technologies: [{
            name: "React"
        },
        {
            name: "Node.js"
        }
        ],
        status: "私有"
    },
    {
        id: 14,
        name: "项目M",
        createdAt: "2022-04-10T09:30:00Z",
        repositoryUrl: "https://gitlab.com/anotherteam/project-m.git",
        platform: "GitLab",
        user: {

            name : ''
        },
        status: "内部",
    },
    {
        id: 15,
        name: "项目N",
        createdAt: "2022-03-25T15:15:00Z",
        repositoryUrl: "https://bitbucket.org/anotheruser/project-n.git",
        platform: "Bitbucket",
        status: "公开"
    },
    {
        id: 16,
        name: "项目O",
        createdAt: "2022-02-20T12:00:00Z",
        repositoryUrl: "https://github.com/anotherorg/project-o.git",
        platform: "GitHub",
        status: "私有"
    },
];

const technologies = [
    {
        name: "React",
        description: "React 引领了现代前端开发的潮流，通过组件化的开发方式，使得 UI 构建更加灵活和高效。它利用虚拟 DOM 技术，显著提高了页面的渲染性能。React Native 的出现更是让 React 可以用于构建原生应用，实现了一次编写，多端运行的目标。",
        isOpenSource: true,
        author: "Facebook",
        cover: '/src/assets/images/react.png',
        type: '前端框架',
    },
    {
        name: "Node.js",
        description: "一个基于Chrome V8引擎的JavaScript运行环境，允许开发者在服务器端运行JavaScript代码。Node.js 的出现使得 JavaScript 不再局限于浏览器端，而是可以在服务器端大放异彩。它采用非阻塞 I/O 模型，使得高并发、高吞吐量的应用得以轻松实现。Node.js 的生态系统极其丰富，拥有大量的第三方库和工具，为开发者提供了极大的便利。",
        isOpenSource: true,
        author: "Joyent, Inc.",
        cover: '/src/assets/images/nodejs.png',
        type: '服务端',
    },
    {
        name: "Angular",
        description: "一个由Google维护的开源JavaScript框架，用于构建单页面应用。Angular 是一个功能强大的前端框架，提供了全面的解决方案，从数据绑定、路由管理到表单验证等一应俱全。它采用组件化架构，使得代码更加模块化和可维护。Angular 的双向数据绑定特性大大简化了前端开发的复杂性。",
        isOpenSource: true,
        author: "Google",
        cover: '/src/assets/images/angular.png',
        type: '前端框架',
    },
    {
        name: "Vue.js",
        description: "一个构建数据驱动的web界面的渐进式框架。Vue.js 以其轻量、灵活和易于上手的特点受到了广大开发者的喜爱。它提供了响应式的数据绑定和组件系统，使得开发者可以高效地构建复杂的用户界面。Vue.js 的生态也在不断发展壮大，为开发者提供了丰富的插件和工具。",
        isOpenSource: true,
        author: "Evan You",
        cover: '/src/assets/images/Vue.png',
        type: '前端框架',
    },
    {
        name: "SpringBoot",
        description: "一个简化Spring应用初始搭建以及开发过程的框架。Spring Boot 是 Java 世界中非常流行的服务端框架，它简化了 Spring 应用的初始搭建和开发过程。Spring Boot 提供了大量的自动配置功能，使得开发者可以专注于业务逻辑的实现，而无需过多关注底层细节。同时，Spring Boot 也集成了众多常用功能，如安全、数据访问、消息传递等，为开发者提供了全方位的支持。",
        isOpenSource: true,
        author: "Pivotal Team",
        cover: '/src/assets/images/SpringBoot.png',
        type: '服务端',
    },
    {
        name: "TensorFlow",
        description: "一个开源机器学习框架，用于进行高性能数值计算。TensorFlow 是机器学习领域的佼佼者，它支持分布式计算，可以充分利用多核 CPU、GPU 以及 TPU 的计算能力。TensorFlow 提供了丰富的算法库和工具，使得开发者可以轻松地构建和训练各种深度学习模型。同时，TensorFlow 也支持多种编程语言和平台，为开发者提供了极大的灵活性。",
        isOpenSource: true,
        author: "Google Brain Team",
        cover: '/src/assets/images/tensorFlow.jpeg',
        type: '数据分析',
    },
    {
        name: "Docker",
        description: "一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何Linux机器上。Docker 通过容器化技术，实现了应用环境的隔离和一致性。它使得应用的部署和运维变得更加简单和高效。通过 Docker，开发者可以轻松地构建、打包和分发应用，而无需担心环境差异带来的问题。Docker 也支持多种编程语言和框架，为开发者提供了极大的便利。\n" +
            "\n",
        isOpenSource: true,
        author: "Docker, Inc.",
        cover: '/src/assets/images/Docker.png',
        type: '服务端',
    },
    {
        name: "Kubernetes",
        description: "一个开源的容器编排系统，用于自动化部署、扩展和管理容器化应用程序。：Kubernetes 是容器编排领域的领导者，它提供了强大的自动化管理功能，可以自动部署、扩展和管理容器化应用。通过 Kubernetes，开发者可以轻松地实现应用的弹性伸缩、负载均衡和故障恢复等功能。Kubernetes 还提供了丰富的 API 和扩展机制，使得开发者可以根据需求定制自己的管理策略。",
        isOpenSource: true,
        author: "Google Cloud",
        cover: '/src/assets/images/Kubernetes.png',
        type: '服务端',
    },
    {
        name: "Flutter",
        description: "一个由Google开发的开源移动UI框架，用于开发高性能、美观的原生应用。Flutter 采用 Dart 语言开发，其热重载功能使得开发者在编写代码时能够实时预览应用界面的变化，大大提高了开发效率。它内置的丰富的 UI 组件和自定义绘制 API 使得开发者能够轻松构建出美观且高性能的原生应用。此外，Flutter 还支持跨平台开发，一次编写即可在 iOS 和 Android 上运行，降低了开发成本。",
        isOpenSource: true,
        author: "Google",
        cover: '/src/assets/images/Flutter.png',
        type: '手机端',
    },
    {
        name: "Swift",
        description: "Apple开发的编程语言，用于iOS、macOS、watchOS和tvOS应用及服务器开发。Swift 语法简洁、清晰，易于学习和使用。它支持面向对象编程和函数式编程，提供了强大的类型系统和安全性。Swift 在性能优化方面表现出色，能够充分利用苹果设备的硬件性能。此外，Swift 社区活跃，拥有大量的教程和第三方库，为开发者提供了丰富的资源。",
        isOpenSource: true,
        author: "Apple Inc.",
        cover: '/src/assets/images/Swift.png',
        type: '手机端',
    },
    {
        name: "Kotlin",
        description: "一个运行在Java虚拟机上的静态类型编程语言，由JetBrains开发，广泛用于Android应用开发。Kotlin 与 Java 完全兼容，可以无缝地使用现有的 Java 库和框架。它简化了许多常见的 Java 编程任务，如空指针检查和 lambda 表达式。Kotlin 还具有强大的类型推断和扩展函数功能，使得代码更加简洁易读。在 Android 开发中，Kotlin 已经成为官方推荐的语言，受到了广大开发者的喜爱。",
        isOpenSource: true,
        author: "JetBrains",
        cover: '/src/assets/images/Kotlin.png',
        type: '手机端',
    },
    {
        name: "Express.js",
        description: "一个基于Node.js平台的快速、开放且极简的web开发框架。Express.js 提供了丰富的路由控制功能，使得开发者能够轻松地构建出结构清晰、易于维护的 web 应用。它还支持中间件机制，使得开发者可以灵活地处理请求和响应。Express.js 社区活跃，拥有大量的第三方中间件和插件，为开发者提供了丰富的功能扩展。",
        isOpenSource: true,
        author: "TJ Holowaychuk",
        cover: '/src/assets/images/ExpressJs.png',
        type: '服务端',
    },
    {
        name: "MongoDB",
        description: "一个基于文档的NoSQL数据库，适用于大规模数据存储和实时数据分析。MongoDB 采用 BSON（Binary JSON）格式存储数据，支持动态模式，使得开发者可以灵活地定义数据结构。它提供了强大的查询和聚合功能，使得数据处理变得简单高效。MongoDB 还支持分片和高可用性部署，能够轻松应对大规模数据存储和访问需求。",
        isOpenSource: true,
        author: "MongoDB, Inc.",
        cover: '/src/assets/images/MongoDB.png',
        type: '数据库',
    },
    {
        name: "Git",
        description: "一个开源的分布式版本控制系统，用于跟踪代码更改。Git 采用了分布式版本控制的理念，每个开发者都可以拥有完整的代码库副本，可以独立地进行代码修改和提交。Git 还支持分支和合并功能，使得多人协作开发变得更加高效和灵活。此外，Git 还具有强大的历史记录功能，可以方便地追踪代码的变更历史。",
        isOpenSource: true,
        author: "Linus Torvalds",
        cover: '/src/assets/images/git.png',
        type: '服务端', // 或者可以认为是'开发工具'，根据上下文而定
    },
    {
        name: "Electron",
        description: "一个使用Web技术构建跨平台桌面应用的框架。",
        isOpenSource: true,
        author: "GitHub",
        cover: '/src/assets/images/Electron.png',
        type: '桌面应用',
    },
    {
        name: "Django",
        description: "一个高级Python Web框架，鼓励快速开发和干净、务实的设计。",
        isOpenSource: true,
        author: "Django Software Foundation",
        cover: '/src/assets/images/Django.jpeg',
        type: '服务端',
    },
    {
        name: "PostgreSQL",
        description: "一个功能强大的开源对象-关系数据库系统。",
        isOpenSource: true,
        author: "PostgreSQL Global Development Group",
        cover: '/src/assets/images/PostgreSQL.png',
        type: '数据库',
    },
];

const categoryList = [
    '全部分类',
    '服务端',
    '数据库',
    '前端框架',
    '手机端',
    '数据分析'
]

Mock.mock('/api/user/getAll', 'get', () => {
    return {
        status: 200,
        data: users,
        success: true,
        message: '成功'
    }
})

Mock.mock('/api/project/getAll', 'get', () => {
    return {
        status: 200,
        data: projects,
        success: true,
        message: '成功'
    }
})

Mock.mock('/api/technology/getAll', 'get', () => {
    return {
        status: 200,
        data: technologies,
        success: true,
        message: '成功'
    }
})

Mock.mock('/api/technology/getAllCategory', 'get', () => {
    return {
        status: 200,
        data: categoryList,
        success: true,
        message: '成功'
    }
})

Mock.mock(RegExp('/api/technology/getByName' + '.*'), 'get', (option) => {
    const name = decodeURI( option.url.slice('/api/technology/getByName?name?'.length));

    return {
        status: 200,
        data: technologies.find(v => v.name === name),
        success: true,
        message: '成功'
    }
})

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
    if (username === 'admin' && password === 'yunzhi') {
        return {
            status: 200,
            data: {
                accessToken:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjIyODA1MjAxMjhAcXEuY29tIiwic3ViIjo5LCJpYXQiOjE2MjU4MzQ3MTksImV4cCI6MTYyODQyNjcxOX0.YQLVi-zw4XWQEd8Hy2YZGlFaqX8c7xyRPrYuxcFywFE'
            },
            success: true,
            message: '成功'
        }
    }
    if
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




