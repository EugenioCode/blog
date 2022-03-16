---
title: GIT使用
date: 2022-03-16
sidebar: 'auto'
tags:
 - git
---
# Git使用
## 一、基础知识

### 1.1 git环境配置
- 配置个人的用户名称和电子邮件地址：
  ```bash
  git config --global user.name "eugeniocode"

  git config --global user.email 'eugeniocode@yeah.net'
  ```

- 查看配置信息:
  ```bash
  git config --list
  ```

- 生成SSH Key:
  ```bash
  ssh-keygen -t rsa -C "eugeniocode@yeah.net"
  ```
### 1.2 git工作流程图
![git工作流](https://raw.githubusercontent.com/EugenioCode/picBed/main/iShot2022-03-16%2022.57.15.png)

- 命令如下：

1. clone（克隆）: 从远程仓库中克隆代码到本地仓库
2. checkout（检出）: 从本地仓库中检出一个仓库分支然后进行修订
3. add（添加）: 在提交前先将代码提交到暂存区
4. commit（提交）: 提交到本地仓库。本地仓库中保存修改的各个历史版本
5. fetch (抓取):从远程库，抓取到本地仓库，不进行任何的合并动作，一般操作比较少。
6. pull (拉取): 从远程库拉到本地库，自动进行合并(merge)，然后放到到工作区，相当于fetch+merge
7. push（推送）:修改完成后，需要和团队成员共享代码时，将代码推送到远程仓库

## 二、仓库管理



