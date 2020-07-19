module.exports = {
  "title": "",//显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  "description": "liying-cmd's Blog",//meta中的描述文字，用于SEO
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"//浏览器的标签栏的网页图标，基地址/docs/.vuepress/public
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"//在移动端，搜索框在获得焦点时会放大
      }
    ]
  ],
  "theme": "reco",//选择主题'reco'
  "themeConfig": {
    "nav": [//导航栏设置
      {
        "text": "Home","link": "/","icon": "reco-home"
      },
      {
        "text": "TimeLine",//时间线
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "Contact",//联系（实现页面跳转）
        "icon": "reco-message",
        "items": [//多个link以下拉列表的形式显示
          {
            "text": "CSDN","link": "http://www.csdn.net/", "icon": "reco-CSDN",
            "text": "GitHub","link": "https://github.com/github", "icon": "reco-github",
            "text":"博客友联","link":"https://srcrs.top/","icon":"friend'blog"
          }
        ]
      }
    ],
   
    "sidebar":
    [//在所有页面中启用自动生成侧栏
      {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ],
      },
      {
        title:'开发指南',
        collapsable:false//是否展开
      },
      [
        './guide/install/install','安装'
      ],
      [
        './guide/started/startede','快速上手'
      ],
  
      {
        title:'组件',
        collapsable:false
      },
      [
        './guide/icon/icon','icon'
      ],
    ],

    
  

    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
   

    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "最后更新时间",
    "author": "",
    "authorAvatar": "/author.png",//作者头像
    "record": "xxxx",
    "startYear": "2020"//项目开始年份
  },
  "markdown": {
    "lineNumbers": true//代码显示行号
  },
    
}