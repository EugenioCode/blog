---
title: NPM
date: 2022-03-21
tags:
 - Npm
 - Node
---
# 列举一些实用的NPM包

## 一、切换`npm`源的工具—— `nrm`

### 1.1 `nrm`的安装

```bash
npm install -g nrm
```

### 1.2 查看可选npm源

```bash
nrm ls
```

![可选的npm源](https://raw.githubusercontent.com/EugenioCode/picBed/main/20220321225239.png)

### 1.3 切换npm源

```bash
nrm use npm
```

![切换npm源](https://raw.githubusercontent.com/EugenioCode/picBed/main/20220321225525.png)

### 1.4 增加npm源

```bash
nrm add <name> <url>
```

### 1.5 删除npm源

```bash
nrm del <name>
```

### 1.6 测试npm源速度

```bash
nrm test [<name>]
```

![测试npm源速度](https://raw.githubusercontent.com/EugenioCode/picBed/main/20220321230122.png)
