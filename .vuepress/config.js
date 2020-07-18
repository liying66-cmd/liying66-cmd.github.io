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
        "text": "Home",//主页
        "link": "/",
        "icon": "reco-home"
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
        "items": [
          {
            "text": "CSDN",
            "link": "http://www.csdn.net/",
            "icon": "reco-github",
            "text": "GitHub",
            "link": "https://github.com/github",//这个就可以换成你的
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
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
    "friendLink": [//这部分友链可以添加也可以删除
      
      <div class="page-friends page-common">
<div class="link-title wow rollIn animated" style="visibility: visible; animation-name: rollIn;">博客友链</div>
<ul class="readers-list clearfix">

<li class="wow slideInUp animated" style="visibility: visible; animation-name: slideInUp;"><a rel="colleague" title="推荐好友" target="_blank" href="https://srcrs.top/"><div>srcrs</div><div>Happy Coding , Happy Life</div></a></li>

</ul>

<div class="link-title wow rollIn animated" style="visibility: visible; animation-name: rollIn;">学习教程</div>
<ul class="readers-list clearfix">

<li class="wow slideInUp animated" style="visibility: visible; animation-name: slideInUp;"><a rel="" title="学的不仅是技术，更是梦想" target="_blank" href="http://www.runoob.com/"><div>菜鸟教程</div><div>学的不仅是技术，更是梦想</div></a></li>

<li class="wow slideInUp animated" style="visibility: visible; animation-name: slideInUp;"><a rel="" title="CSDN学院" target="_blank" href="http://www.csdn.net/"><div>Layui</div><div>CSDN学院</div></a></li>

<li class="wow slideInUp animated" style="visibility: visible; animation-name: slideInUp;"><a rel="" title="在线学习教程" target="_blank" href="http://www.w3school.com.cn/"><div>w3school</div><div>在线学习教程</div></a></li>

<li class="wow slideInUp animated" style="visibility: visible; animation-name: slideInUp;"><a rel="" title="编程实战训练" target="_blank" href="https://www.w3cschool.cn/"><div>w3cschool</div><div>编程实战训练</div></a></li>

</ul>

</div>



    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "最后更新时间",
    "author": "",
    "authorAvatar": "/author.png",//作者头像
    "record": "xxxx",
    "startYear": "2017"//项目开始年份
  },
  "markdown": {
    "lineNumbers": true//代码显示行号
  },
    
}