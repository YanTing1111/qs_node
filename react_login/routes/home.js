const router = require('koa-router')()
const userInfoController = require('./../controllers/user-info')
const routers = router.get('/', async(ctx) => {
    const title = 'login home'
    await ctx.render('home',{
        title: '首页'
    })
}).post('/singin', userInfoController.singIn)
module.exports = routers