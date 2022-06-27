(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{609:function(s,a,t){"use strict";t.r(a);var n=t(15),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[s._v("Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。")])]),s._v(" "),t("h1",{attrs:{id:"git使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git使用"}},[s._v("#")]),s._v(" Git使用")]),s._v(" "),t("h2",{attrs:{id:"一、基础知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、基础知识"}},[s._v("#")]),s._v(" 一、基础知识")]),s._v(" "),t("h3",{attrs:{id:"_1-1-git环境配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-git环境配置"}},[s._v("#")]),s._v(" 1.1 git环境配置")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("查看git版本")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" version\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("配置个人的用户名称和电子邮件地址：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eugeniocode"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eugeniocode@yeah.net'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("查看配置信息:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --list\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("生成SSH Key:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ssh-keygen -t rsa -C "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eugeniocode@yeah.net"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"_1-2-基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-基本概念"}},[s._v("#")]),s._v(" 1.2 基本概念")]),s._v(" "),t("ul",[t("li",[s._v("工作区\n"),t("ul",[t("li",[s._v("本地项目存放文件的位置")])])]),s._v(" "),t("li",[s._v("暂存区 (Index/Stage)\n"),t("ul",[t("li",[s._v("顾名思义就是暂时存放文件的地方，通过add命令将工作区的文件添加到缓冲区")])])]),s._v(" "),t("li",[s._v("本地仓库（Repository）\n"),t("ul",[t("li",[s._v("通常情况下，我们使用commit命令可以将暂存区的文件添加到本地仓库")])])]),s._v(" "),t("li",[s._v("远程仓库（Remote）\n"),t("ul",[t("li",[s._v("当使用GitHub、Gitee、GitLab等托管我们项目时，它就是一个远程仓库。")]),s._v(" "),t("li",[s._v("通常我们使用clone命令将远程仓库代码拷贝下来，本地代码更新后，通过push托送给远程仓库。")])])])]),s._v(" "),t("h3",{attrs:{id:"_1-3-git工作流程图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-git工作流程图"}},[s._v("#")]),s._v(" 1.3 git工作流程图")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/EugenioCode/picBed/main/iShot2022-03-16%2022.57.15.png",alt:"git工作流"}})]),s._v(" "),t("ul",[t("li",[s._v("命令如下：")])]),s._v(" "),t("ol",[t("li",[s._v("clone(克隆): 从远程仓库中克隆代码到本地仓库")]),s._v(" "),t("li",[s._v("checkout(检出): 从本地仓库中检出一个仓库分支然后进行修订")]),s._v(" "),t("li",[s._v("add(添加): 在提交前先将代码提交到暂存区")]),s._v(" "),t("li",[s._v("commit(提交): 提交到本地仓库。本地仓库中保存修改的各个历史版本")]),s._v(" "),t("li",[s._v("fetch(抓取): 从远程库，抓取到本地仓库，不进行任何的合并动作，一般操作比较少。")]),s._v(" "),t("li",[s._v("pull(拉取): 从远程库拉到本地库，自动进行合并(merge)，然后放到到工作区，相当于fetch+merge")]),s._v(" "),t("li",[s._v("push(推送): 修改完成后，需要和团队成员共享代码时，将代码推送到远程仓库")]),s._v(" "),t("li",[s._v("reset(回退):用于回退版本，可以指定退回某一次提交的版本")])]),s._v(" "),t("h2",{attrs:{id:"二、仓库管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、仓库管理"}},[s._v("#")]),s._v(" 二、仓库管理")]),s._v(" "),t("h2",{attrs:{id:"三、git常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、git常用命令"}},[s._v("#")]),s._v(" 三、Git常用命令")]),s._v(" "),t("h3",{attrs:{id:"_3-1-添加-删除文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-添加-删除文件"}},[s._v("#")]),s._v(" 3.1 添加/删除文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看工作区的文件状态")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加工作区的所有文件到暂存区")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加指定文件到暂存区，多个文件用空格隔开")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除工作区指定文件，多个文件用空格隔开,并且将这次删除放入暂存区")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止追踪指定文件，但该文件会保留在工作区")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" --cached "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 改名文件，并且将这个改名放入暂存区")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file-original"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file-renamed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"_3-2-提交代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-提交代码"}},[s._v("#")]),s._v(" 3.2 提交代码")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交代码到仓库区，没有-m会进入vim编辑器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'message'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交指定文件到仓库区，多个文件用空格隔开")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'message'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"_3-3-分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-分支"}},[s._v("#")]),s._v(" 3.3 分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看本地所有分支")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看本地和远程所有分支")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -a\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建一个分支并停留在当前分支")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("新分支名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到指定分支")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("分支名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建一个分支并切换到该分支")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("新分支名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 合并制定分支到当前分支")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("分支名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h3",{attrs:{id:"_3-4-标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-标签"}},[s._v("#")]),s._v(" 3.4 标签")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所以标签")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建一个标签")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tab "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("xxx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除本地标签")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -d "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("标签名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除远程标签")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin :refs/tags/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("标签名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交指定标签")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("remote"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("标签名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建一个分支并指向某个标签")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("新分支名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("标签名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h3",{attrs:{id:"_3-5-撤销"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-撤销"}},[s._v("#")]),s._v(" 3.5 撤销")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("git restore")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 撤销工作区tracked过所有文件的修改")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" restore "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git add . 的逆操作（--staged 简写 -S）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" restore --staged "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将当前工作区 回滚 到某次 commit 版本")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" restore --source"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("commitId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("git clean")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出哪些文件会被删除")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clean -n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除当前目录下所有没有track过的文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clean -f\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  删除当前目录下没有track过的文件及文件夹")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clean -df\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除当前目录下所有没有被track过的文件. 不管他是否是.gitignore文件里面指定的文件夹和文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clean -xf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"_3-5-回滚"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-回滚"}},[s._v("#")]),s._v(" 3.5 回滚")]),s._v(" "),t("p",[s._v("回滚某次、某个连续的提交，生成新的提交记录。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" revert "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("commit-id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("场景：提交了错误代码，想要回滚到某次提交，但是此时其他团队成员也对该分支进行了合并，如果使用了 reset 后则需要其他人重新再合并一遍，此时应该使用 revert 回滚某次提交；或远程仓库是受保护的（不允许 force push）, 此时也应该使用revert进行代码回滚")])]),s._v(" "),t("p",[s._v("回滚到某次提交")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("commit-id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --soft "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("commit-id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"_3-6-变基"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-变基"}},[s._v("#")]),s._v(" 3.6 变基")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"四、实际业务场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、实际业务场景"}},[s._v("#")]),s._v(" 四、实际业务场景")]),s._v(" "),t("h3",{attrs:{id:"场景一-bug分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#场景一-bug分支"}},[s._v("#")]),s._v(" 场景一：Bug分支")]),s._v(" "),t("hr"),s._v(" "),t("p",[t("strong",[s._v("场景描述")]),s._v("：当你接到一个修复一个代号101的bug的任务时，很自然地，你想创建一个分支issue-101来修复它，但是，当前正在dev上进行的工作还没有提交。并不是你不想提交，而是工作只进行到一半，还没法提交，预计完成还需1天时间。但是，必须在两个小时内修复该bug，怎么办？")]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("Git还提供了一个"),t("code",[s._v("stash")]),s._v("功能，可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("现在，用"),t("code",[s._v("git status")]),s._v("查看工作区，就是干净的（除非有没有被Git管理的文件），因此可以放心地创建分支来修复bug。")]),s._v(" "),t("ol",[t("li",[s._v("首先确定要在哪个分支上修复bug，假定需要在"),t("code",[s._v("master")]),s._v("分支上修复，就从"),t("code",[s._v("master")]),s._v("创建临时分支"),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b issue-101\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[s._v("修复bug，然后提交"),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" readme.txt \n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fix bug 101"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[s._v("修复完成后，切换到"),t("code",[s._v("master")]),s._v("分支，并完成合并，最后删除"),t("code",[s._v("issue-101")]),s._v("分支"),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" switch master\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge --no-ff -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"merged bug fix 101"')]),s._v(" issue-101\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[s._v("现在，是时候接着回到dev分支干活了！"),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" switch dev\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("工作区是干净的，刚才的工作现场存到哪去了？用git stash list命令看看：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash list\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("工作现场还在，Git把stash内容存在某个地方了，但是需要恢复一下，有两个办法：")]),s._v(" "),t("p",[s._v("一是用"),t("code",[s._v("git stash apply")]),s._v("恢复，但是恢复后，stash内容并不删除，你需要用"),t("code",[s._v("git stash drop")]),s._v("来删除；")]),s._v(" "),t("p",[s._v("另一种方式是用"),t("code",[s._v("git stash pop")]),s._v("，恢复的同时把stash内容也删了")])])])])]),s._v(" "),t("h3",{attrs:{id:"场景二-选择某个提交进行合并"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#场景二-选择某个提交进行合并"}},[s._v("#")]),s._v(" 场景二：选择某个提交进行合并")]),s._v(" "),t("hr"),s._v(" "),t("p",[t("strong",[s._v("场景描述")]),s._v("：对于多分支的代码库，将代码从一个分支转移到另一个分支是常见需求。\n当我们在一个分支上开发了两个功能时，代码快要合并时被告知有一个功能不需要了，这个时候，我们只需要将开发分支的部分提交合并到master分支。")]),s._v(" "),t("hr"),s._v(" "),t("ol",[t("li",[s._v("基本用法"),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cherry-pick "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("commitHash"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);