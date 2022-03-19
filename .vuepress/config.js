module.exports = {
  "base":"/vuepress-blog/",
  "title": "Jianjun Yang's Blog",
  "description": "若不接受自己的卑微与渺小，我们很难发自内心地去尊重他人",
  "dest": "public",
  "head": [
    ["link", { rel: "stylesheet", href: "https://at.alicdn.com/t/font_3259116_75q75ougpj.css" }],
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
    "subSidebar": 'auto',
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      // {
      //   "text": "时间线",
      //   "link": "/timeline/",
      //   "icon": "reco-date"
      // },
      {
        "text": "代码工具",
        "items": [
          {
            "text": "Git",
            "link": "/blogs/git.md",
            "icon": "iconfont icon-git"
          }
        ]
      },
      {
        "text": "前端",
        "items": [
          {
            "text": "Html",
            "link": "/blogs/html.md",
            "icon": "iconfont icon-HTML"
          },
          {
            "text": "Vue",
            "link": "/blogs/vue.md",
            "icon": "iconfont icon-vuejs"
          }
        ]
      },
      {
        "text": "服务端",
        "items": [
          {
            "text": "Egg",
            "link": "/blogs/egg.md",
            "icon": "iconfont icon-egg"
          }
        ]
      },
      {
        "text": "数据库",
        "items": [
          {
            "text": "Mysql",
            "link": "/blogs/mysql.md",
            "icon": "iconfont icon-mysql1"
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
    "logo": "/logo.png",
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
