const Mock = require('mockjs')

let id = Mock.mock('@id')

console.log(id);

let obj = Mock.mock({
    id: '@id',
    username: '@cname',
    data: '@date',
    avatar: "@image('200x200','red','#fff','avatar')",
    description: '@paragraph',
    ip: '@ip',
    email: '@email'
})

console.log(obj);