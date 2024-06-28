# micro-app微前端demo

启动顺序：

1、启动基座substrate

2、启动子应用，static可以用vscode的live server


# 原理解析

1.micro-app的核心就是创建一个WebComponent自定义组件

2.获取html,将模板放到webComponent中

3.css做作用域隔离,js做proxy沙箱

4.路由劫持，根据应用条件来挂载、卸载应用 

