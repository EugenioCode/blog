module.exports = {
  "base":"/blog/",
  "title": "Jianjun Yang's Blog",
  "description": "若不接受自己的卑微与渺小，我们很难发自内心地去尊重他人",
  "dest": "public",
  plugins: ['one-click-copy', {
    copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
    copyMessage: '代码已复制',
    duration: 300,
    showInMobile: false
  }],
  "head": [
    ["link", { rel: "stylesheet", href: "https://at.alicdn.com/t/font_3259116_81hcj1y3hxy.css" }],
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    modePicker: false,
    "subSidebar": 'auto',
    "nav": [
      {
        "text": "Home",
        "link": "/",
      },
      // {
      //   "text": "时间线",
      //   "link": "/timeline/",
      //   "icon": "reco-date"
      // },
      {
        "text": "工具/包",
        "items": [
          {
            "text": "Git",
            "link": "/blogs/git.md",
            "icon": "iconfont icon-git"
          },
          {
            "text": "Npm",
            "link": "/blogs/npm.md",
            "icon": "iconfont icon-npm"
          },
          {
            "text": "Mac软件",
            "link": "/blogs/mac.md",
            "icon": "iconfont icon-macOS"
          }
        ]
      },
      {
        "text": "前端",
        "items": [
          {
            "text": "Typescript",
            "link": "/blogs/typescript.md",
            "icon": "iconfont icon-typescript"
          },
          {
            "text": "Html",
            "link": "/blogs/html.md",
            "icon": "iconfont icon-html5"
          },
          {
            "text": "Vue",
            "link": "/blogs/vue.md",
            "icon": "iconfont icon-vue"
          }
        ]
      },
      {
        "text": "服务端",
        "items": [
          {
            "text": "Egg",
            "link": "/blogs/egg.md",
            "icon": "iconfont icon-Egg"
          }
        ]
      },
      {
        "text": "数据库",
        "items": [
          {
            "text": "Mysql",
            "link": "/blogs/mysql.md",
            "icon": "iconfont icon-mysql"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-github",
        "link": "https://github.com/EugenioCode",
      }
    ],
    "sidebar": {
      // "/docs/theme-reco/": [
      //   "",
      //   "theme",
      //   "plugin",
      //   "api"
      // ]
    },
    "type": "blog",
    "blogConfig": {
      // "category": {
      //   "location": 2,
      //   "text": "前端"
      // },
      // "tag": {
      //   "location": 3,
      //   "text": "标签"
      // }
    },
    "friendLink": [
      // {
      //   "title": "午后南杂",
      //   "desc": "Enjoy when you can, and endure when you must.",
      //   "email": "1156743527@qq.com",
      //   "link": "https://www.recoluan.com"
      // },
      // {
      //   "title": "vuepress-theme-reco",
      //   "desc": "A simple and beautiful vuepress Blog & Doc theme.",
      //   "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      //   "link": "https://vuepress-theme-reco.recoluan.com"
      // }
    ],
    "logo": "/avatar.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "jianjun.yang",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  }
}
