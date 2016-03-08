hexo-theme-material-indigo
================

Material Design 风格的Hexo主题，基于 Hexo 3.0+ 制作。预览 [我的博客](http://www.imys.net/)

## 特色

1. 仅支持 IE10+ 等现代浏览器。难道还有程序猿用 IE < 9 吗？
2. 去 jQuery。仅仅 100+ 行js代码，还需要 jQuery 吗？
3. 去 fancybox。没了 jQuery, 这个自然也失效了。
4. 使用 Less 作为 css 预处理器，需要安装 `hexo-renderer-less`。
5. 添加了英文字体支持 Roboto。
6. 添加了一些波纹效果。By [Waves](https://github.com/fians/Waves)
7. 分享直接使用了 JiaThis API 接口，免去了一次加载请求。

## 使用

### 安装

`$ git clone git@github.com:yscoder/hexo-theme-indigo.git themes/indigo`

### less安装

`npm install hexo-renderer-less --save`

### 配置

修改`hexo/_config.yml`

```
# 主题
theme: indigo

# 插件依赖
plugins:
  - hexo-renderer-less
```

### 开启标签页

`hexo new page tags`

修改`hexo/source/tags/index.md`的页面配置

```
type: "tags"
noDate: true
comments: false
---
```


## 截图

### PC

![indigo-pc](https://github.com/yscoder/hexo-theme-indigo/raw/master/screenshots/hexo-theme-pc.png)

### Pad

![indigo-pad](https://github.com/yscoder/hexo-theme-indigo/raw/master/screenshots/hexo-theme-pad.png)

### Phone

![indigo-phone-1](https://github.com/yscoder/hexo-theme-indigo/raw/master/screenshots/hexo-theme-phone-1.png)
![indigo-phone-2](https://github.com/yscoder/hexo-theme-indigo/raw/master/screenshots/hexo-theme-phone-2.png)

## Config

```
#添加新菜单项遵循以下规则
# menu:
#  link:               fontawesome图标，省略前缀，本主题前缀为 icon-，必须
#    text: About       菜单显示的文字，如果省略即默认与图标一致，首字母会转大写
#    url: /about       链接，绝对或相对路径，必须。
#    target: _blank    是否跳出，省略则在当前页面打开
menu:
  home:
    url: /
  archives:
    url: /archives
  tags:
    url: /tags
  github:
    url: https://github.com/yscoder
    target: _blank
  weibo:
    url: http://www.weibo.com/ysweb
    target: _blank
  link:
    text: 测试
    url: /

rss: /atom.xml

#你的头像url
avatar: /img/logo.jpg

# email
email: 634206017@qq.com

# Content
tags:
  title: 标签

excerpt_link: more
mathjax: false
archive_yearly: true

#是否开启分享
share: true

#是否大屏幕下文章页隐藏导航
hideMenu: true

#是否开启toc
#toc: false
toc:
  list_number: false  # 是否显示数字排序

#站长统计，如要开启，输入CNZZ站点id，如 cnzz: 1255152447
cnzz: false

# Miscellaneous
google_analytics: ''
favicon: /favicon.ico

# less
less:
  paths:
    - source/css/style.less

#是否开启多说评论，填写你在多说申请的项目名称 duoshuo: duoshuo-key
#若使用disqus，请在博客config文件中填写disqus_shortname，并关闭多说评论
duoshuo: ysblog
```
