const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const mount = require('koa-mount');

// 创建一个静态文件服务中间件，并指向静态文件目录
const staticMiddleware = serve('./build', {});

// 挂载静态文件服务中间件到 /prefix 路径
app.use(mount('/react', staticMiddleware));

app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`);

    if (ctx.request.url.startsWith('/react')) {
        ctx.body = require('fs').readFileSync(__dirname + '/build/index.html', 'utf-8');
    } else {
        await next();
    }

})


// 处理404错误的路由
app.use(async (ctx) => {
    if (ctx.status === 404) {
        ctx.body = '内容丢失了。。。'
    }
});

app.listen(3000, () => {
    console.log('服务器启动了，端口是3000')
});