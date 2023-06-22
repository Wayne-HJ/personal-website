# <a name="readme-top">Springboot + Vue 前后端分离个人网站+管理后台</a>

<p >
   <a target="_blank" href="#">
      <img src="https://img.shields.io/hexpm/l/plug.svg"/>
      <img src="https://img.shields.io/badge/JDK-1.8+-green.svg"/>
      <img src="https://img.shields.io/badge/springboot-2.4.2.RELEASE-green"/>
      <img src="https://img.shields.io/badge/vue-2.5.17-green"/>
      <img src="https://img.shields.io/badge/mysql-8.0.20-green"/>
      <img src="https://img.shields.io/badge/mybatis--plus-3.4.0-green"/>
      <img src="https://img.shields.io/badge/redis-6.0.5-green"/>
      <img src="https://img.shields.io/badge/elasticsearch-7.9.2-green"/>
      <img src="https://img.shields.io/badge/rabbitmq-3.8.5-green"/>
   </a>
</p>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Wayne-HJ/personal-website">
    <img src="public/logo.png" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">Vue 个人网站</h3>
  <p align="center">
    本项目为个人网站的vue前端
    <br />
    <!-- <a href="https://github.com/Wayne-HJ/personal-website"><strong>Explore the docs »</strong></a> -->
    <!-- <br /> -->
    <br />
    <a href="https://blog.jianght.eu.org">View Demo</a>
    ·
    <a href="https://github.com/Wayne-HJ/personal-website/issues">Report Bug</a>
    <!-- ·
    <a href="https://github.com/Wayne-HJ/personal-website/issues">Request Feature</a> -->
  </p>
</div>

[项目介绍](#项目介绍) | [技术介绍](#技术介绍) | [运行环境](#运行环境) | [开发环境](#开发环境) | [项目截图](#项目截图) | [快速开始](#快速开始)｜[英文介绍(English)](README.md)
<!-- ABOUT THE PROJECT -->
## 项目介绍
![](https://cdn.jsdelivr.net/gh/Wayne-HJ/pictures@main/img/20230518210626.png)

- 项目整体采用风、宇的个人博客为基础进行二次开发。
- 采用前后端分离部署，方便开发，具有更好的扩展性和维护性。
- 网站前台参考"Hexo"的"Butterfly"设计。
- 管理后台参考"element-admin"设计：侧边栏，历史标签，自动生成面包屑导航。

**网站前台**
- 文章使用Markdown编辑器，简洁，适应主流。
- 文章浏览支持代码高亮和复制，图片预览，深色模式等功能，提升用户体验。
- 文章搜索支持高亮分词，响应速度快。
- 支持发布说说，随时分享趣事。
- 支持文字和表情评论，样式参考Valine。
- 音乐播放器，支持在线搜索歌曲。
- 聊天室支持撤回、语音输入、统计未读数量等功能。
- 留言采用弹幕墙样式。

```
personal website:
├── assets    --  js,css,iconfont文件
├── components    --  通用vue组件
├── plugins       --  vue插件
├── router        --  vue路由
├── store         --  vue状态管理
├── utils         --  markdown.js
├── views         --  项目页面目录
```

## 技术介绍

**前端：** vue + vuex + vue-router + axios + vuetify + element + echarts

## 运行环境

**服务器：** oracle1核1G CentOS7.6

**对象存储：** minio

## 开发环境

|开发工具|说明|
|-|-|
|VSCode|Vue开发工具IDE|
|Another Redis Desktop Manager|Redis远程连接工具|
|X-shell|Linux远程连接工具|
|Xftp|Linux文件上传工具|


## 项目截图
**网站前台**
![](https://cdn.jsdelivr.net/gh/Wayne-HJ/pictures@main/img/20230518210853.png)
![](https://cdn.jsdelivr.net/gh/Wayne-HJ/pictures@main/img/20230518210948.png)
## 快速开始
本项目为vue前端
需提前启动springboot后台服务后方可运行

项目启动

```
npm install
npm run serve
```
