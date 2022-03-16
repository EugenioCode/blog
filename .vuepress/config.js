module.exports = {
  base:"/vuepress-blog/",
  "title": "Jianjun's Blog",
  "description": "若不接受自己的卑微与渺小，我们很难发自内心地去尊重他人",
  "dest": "public",
  "head": [
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
        "icon": "reco-document",
        "items": [
          {
            "text": "Git",
            "link": "/blogs/git.md"
          }
        ]
      },
      {
        "text": "前端",
        "icon": "reco-document",
        "items": [
          {
            "text": "Html",
            "link": "/blogs/html.md"
          },
          {
            "text": "Vue",
            "link": "/blogs/vue.md"
          }
        ]
      },
      // {
      //   "text": "Contact",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "GitHub",
      //       "link": "https://github.com/recoluan",
      //       "icon": "reco-github"
      //     }
      //   ]
      // }
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
