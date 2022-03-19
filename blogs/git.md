---
title: GIT使用
date: 2022-03-16
sidebar: 'auto'
tags:
 - git
---

:::tip
Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。
:::

<!-- more -->

# Git使用
## 一、基础知识

### 1.1 git环境配置
- 查看git版本
  ```bash
  git version
  ```
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

### 1.2 基本概念
- 工作区
    - 本地项目存放文件的位置
- 暂存区 (Index/Stage)
  - 顾名思义就是暂时存放文件的地方，通过add命令将工作区的文件添加到缓冲区
- 本地仓库（Repository）
  - 通常情况下，我们使用commit命令可以将暂存区的文件添加到本地仓库
- 远程仓库（Remote）
  - 当使用GitHub、Gitee、GitLab等托管我们项目时，它就是一个远程仓库。
  - 通常我们使用clone命令将远程仓库代码拷贝下来，本地代码更新后，通过push托送给远程仓库。

### 1.3 git工作流程图
![git工作流](https://raw.githubusercontent.com/EugenioCode/picBed/main/iShot2022-03-16%2022.57.15.png)

- 命令如下：

1. clone(克隆): 从远程仓库中克隆代码到本地仓库
2. checkout(检出): 从本地仓库中检出一个仓库分支然后进行修订
3. add(添加): 在提交前先将代码提交到暂存区
4. commit(提交): 提交到本地仓库。本地仓库中保存修改的各个历史版本
5. fetch(抓取): 从远程库，抓取到本地仓库，不进行任何的合并动作，一般操作比较少。
6. pull(拉取): 从远程库拉到本地库，自动进行合并(merge)，然后放到到工作区，相当于fetch+merge
7. push(推送): 修改完成后，需要和团队成员共享代码时，将代码推送到远程仓库
8. reset(回退):用于回退版本，可以指定退回某一次提交的版本

## 二、仓库管理

## 三、Git常用命令
### 3.1 添加/删除文件
  
  ```bash
  # 查看工作区的文件状态
  git status

  # 添加工作区的所有文件到暂存区
  git add .

  # 添加指定文件到暂存区，多个文件用空格隔开
  git add [file1] [file2]
  ```
  ```bash
  # 删除工作区指定文件，多个文件用空格隔开
  git rm [file1] [file2]

  # 停止追踪指定文件，但该文件会保留在工作区
  git rm --cached [file]
  ```

### 3.2 提交代码
  ```bash
  # 提交代码到仓库区，没有-m会进入vim编辑器
  git commit -m 'message'

  # 提交指定文件到仓库区，多个文件用空格隔开
  git commit [file1] [file2]... -m 'message'
  ```
### 3.3 分支
  ```bash
  # 查看本地所有分支
  git branch

  # 查看本地和远程所有分支
  git branch -a

  # 新建一个分支并停留在当前分支
  git branch [新分支名]

  # 切换到指定分支
  git checkout [分支名]

  # 新建一个分支并切换到该分支
  git checkout -b [新分支名]

  # 合并制定分支到当前分支
  git merge [分支名]
  ```
### 3.4 标签
  ```bash
  # 查看所以标签
  git tag

  # 新建一个标签
  git tab [xxx]

  # 删除本地标签
  git tag -d [标签名]

  # 删除远程标签
  git push origin :refs/tags/[标签名]

  # 提交指定标签
  git push [remote] [标签名]

  # 新建一个分支并指向某个标签
  git checkout -b [新分支名] [标签名]
  ```
### 3.5 撤销

- git restore
  
  ```bash
  # 撤销工作区tracked过所有文件的修改
  git restore .

  # git add . 的逆操作（--staged 简写 -S）
  git restore --staged .

  # 将当前工作区 回滚 到某次 commit 版本
  git restore --source=[commitId]
  ```
- git clean
  
  ```bash
  # 输出哪些文件会被删除
  git clean -n

  # 删除当前目录下所有没有track过的文件
  git clean -f

  #  删除当前目录下没有track过的文件及文件夹
  git clean -df

  # 删除当前目录下所有没有被track过的文件. 不管他是否是.gitignore文件里面指定的文件夹和文件
  git clean -xf
  ```
### 3.5 回滚
回滚某次、某个连续的提交，生成新的提交记录。
```bash
git revert [commit-id]
```
> 场景：提交了错误代码，想要回滚到某次提交，但是此时其他团队成员也对该分支进行了合并，如果使用了 reset 后则需要其他人重新再合并一遍，此时应该使用 revert 回滚某次提交；或远程仓库是受保护的（不允许 force push）, 此时也应该使用revert进行代码回滚

回滚到某次提交
```bash
git reset --hard [commit-id]
git reset --soft [commit-id]
```
> 场景：提交了错误代码，远程仓库不是受保护的，并且

