# <a name="readme-top">Springboot + Vue Separation of Front-end and Back-end Personal Website + Management Backend</a>

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
  <h3 align="center">Vue Personal Website</h3>
  <p align="center">
    This project is the frontend of the Vue personal website
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

[Introduction](#introduction) | [Technologies](#technologies) | [Environment](#environment) | [Development Environment](#development-environment) | [Project Screenshots](#project-screenshots) | [Quick Start](#quick-start)｜[Chinese(中文)](README_CN.md)
<!-- ABOUT THE PROJECT -->
## Introduction
![Project Introduction](https://cdn.jsdelivr.net/gh/Wayne-HJ/pictures@main/img/20230518210626.png)

- The project is developed based on Feng and Yu's personal blog.
- It adopts the separation of front-end and back-end deployment, which is convenient for development and has better scalability and maintainability.
- The design of the website front-end refers to "Butterfly" of "Hexo".
- The management background refers to the design of "element-admin": sidebar, history tags, automatically generated breadcrumb navigation.

**Website Frontend**
- Articles are edited using Markdown editor, simple and adaptable to the mainstream.
- Article browsing supports code highlighting and copying, image preview, dark mode, and other functions to improve the user experience.
- Article search supports highlighting and word segmentation, with fast response speed.
- Supports publishing moments to share interesting things at any time.
- Supports text and emoji comments, with styling reference from Valine.


- Music player supports online song search.
- The chat room supports functions such as recall, voice input, and unread message count statistics.
- The message board adopts the style of bullet curtain wall.

```
personal website:
├── assets    --  js,css,iconfont files
├── components    --  common Vue components
├── plugins       --  Vue plugins
├── router        --  Vue router
├── store         --  Vue state management
├── utils         --  markdown.js
├── views         --  project page directory
```

## Technologies

**Frontend:** vue + vuex + vue-router + axios + vuetify + element + echarts

## Environment

**Server:** 1 Core 1GB Oracle CentOS 7.6

**Object Storage:** Minio

## Development Environment

|Development Tool|Description|
|-|-|
|VSCode|Vue development tool IDE|
|Another Redis Desktop Manager|Redis remote connection tool|
|X-shell|Linux remote connection tool|
|Xftp|Linux file upload tool|


## Project Screenshots
**Website Frontend**
![](https://cdn.jsdelivr.net/gh/Wayne-HJ/pictures@main/img/20230518210853.png)
![](https://cdn.jsdelivr.net/gh/Wayne-HJ/pictures@main/img/20230518210948.png)
## Quick Start
This project is the Vue frontend.
Make sure to start the Spring Boot backend service before running.

Project setup

```
npm install
npm run serve
```
