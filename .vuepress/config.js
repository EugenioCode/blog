module.exports = {
  "base":"/blog/",
  "title": "Jianjun Yang's Blog",
  "description": "若不接受自己的卑微与渺小，我们很难发自内心地去尊重他人",
  "dest": "public",
  plugins: ['tabs'],
  "port": '8099',
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
    "modePicker": false,
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
      // {
      //   "text": "工具/包",
      //   "items": [
      //     {
      //       "text": "Git",
      //       "link": "/blogs/git.md",
      //       "icon": "iconfont icon-git"
      //     },
      //     {
      //       "text": "Npm",
      //       "link": "/blogs/npm.md",
      //       "icon": "iconfont icon-npm"
      //     },
      //     {
      //       "text": "Mac软件",
      //       "link": "/blogs/mac.md",
      //       "icon": "iconfont icon-macOS"
      //     }
      //   ]
      // },
      {
        "text": "前端",
        "items": [
          {
            "text": "Typescript",
            "link": "/blogs/FrontEnd/typescript.md",
            "icon": "iconfont icon-typescript"
          },
          {
            "text": "Html",
            "link": "/blogs/FrontEnd/html.md",
            "icon": "iconfont icon-html5"
          },
          {
            "text": "Vue",
            "link": "/blogs/FrontEnd/vue.md",
            "icon": "iconfont icon-vue"
          }
        ]
      },
      {
        "text": "服务端",
        "items": [
          {
            "text": "Egg",
            "link": "/blogs/BackEnd/egg.md",
            "icon": "iconfont icon-Egg"
          },
          {
            "text": "Mysql",
            "link": "/blogs/BackEnd/mysql.md",
            "icon": "iconfont icon-mysql"
          }
        ]
      },
      {
        "text": "工具",
        "link": "/docs/"
      },
      {
        "text": "Contact",
        "icon": "reco-github",
        "link": "https://github.com/EugenioCode",
      }
    ],
    "sidebar": {
      "/docs/": [
        "",
        "mac",
        "git",
        "npm"
      ]
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
    "logo": "/avatar_new.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "jianjun.yang",
    "authorAvatar": "/avatar_new.png",
    "record": "xxxx",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }
}
