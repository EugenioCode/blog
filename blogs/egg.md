---
title: Egg.js
date: 2022-03-18
sidebar: 'auto'
tags:

- node
- koa
- egg
---
:::tip
Egg.js为企业级框架和应用而生的Node.js框架，Egg（简写）奉行【约定优于配置】的框架，按照一套同意的约定进行应用开发。
:::

<!-- more -->

##  一、 Egg.js初始

### 1.1 安装
  ```bash
  mkdir egg-example && cd egg-example
  npm init egg --type=simple
  npm i
  ```

  :::danger
  如果项目报如下错 `ESLint couldn't find the plugin "eslint-plugin-jsdoc".`，先升级`npm`版本，保证`npm`版本大于`8.1.2`；删除 `node_modules`文件夹以及`pageage-lock.json`文件，重新`npm install`即可解决。
  :::

  ```bash
  npm run dev
  ```

### 1.2 项目目录结构

  ```bash
  .
  ├── README.md
  ├── app
  │   ├── controller
  │   │   └── home.js
  │   ├── public
  │   └── router.js
  ├── appveyor.yml
  ├── config
  │   ├── config.default.js
  │   └── plugin.js
  ├── jsconfig.json
  ├── logs
  │   └── egg01
  │       ├── common-error.log
  │       ├── egg-agent.log
  │       ├── egg-schedule.log
  │       ├── egg-web.log
  │       └── egg01-web.log
  ├── package-lock.json
  ├── package.json
  ├── run
  │   ├── agent_config.json
  │   ├── agent_config_meta.json
  │   ├── agent_timing_24173.json
  │   ├── application_config.json
  │   ├── application_config_meta.json
  │   ├── application_timing_24176.json
  │   └── router.json
  ├── test
  │   └── app
  │       └── controller
  │           └── home.test.js
  └── typings
      ├── app
      │   ├── controller
      │   │   └── index.d.ts
      │   └── index.d.ts
      └── config
          ├── index.d.ts
          └── plugin.d.ts
  ```

### 1.3 Egg.js的控制层
  ![controller](https://raw.githubusercontent.com/EugenioCode/picBed/main/20220322223024.png)
  - 配置页面的路由
    ```bash
    # app/router.js
    router.get('/list', controller.list.list);
    ```
    ![](https://raw.githubusercontent.com/EugenioCode/picBed/main/20220322223340.png)
### 1.4 路由params传参

  > 在router中通过 `:id`，接受参数
  ```bash
   # app/router.js
   router.get('/list/page/:id', controller.list.page);
   ```
   > 在controller中，通过`ctx.params`拿参数
   ```javascript
   async page() {
    const { ctx } = this;
    const id = ctx.params.id;
    ctx.body = `pageIndex: ${id}`;
  }
   ```
  ![](https://raw.githubusercontent.com/EugenioCode/picBed/main/20220322225753.png)

### 1.5 query的形式传参
```bash
 # app/router.js
 router.get('/list/page2', controller.list.page2);
 ```
 > 在controller中，通过`ctx.query`拿参数
```js
async page2() {
    const { ctx } = this;
    const page = ctx.query.page;
    ctx.body = `pageIndex: ${page}`;
  }
```
![](https://raw.githubusercontent.com/EugenioCode/picBed/main/20220322230039.png)
### 1.6 返回状态码设置
> 通过`ctx.status`修改状态码
```js
ctx.status = 201;
```
![](https://raw.githubusercontent.com/EugenioCode/picBed/main/20220322230545.png)




