import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: resolve => require(["../views/home/Home.vue"], resolve)
  },
  {
    path: "/articles/:articleId",
    component: resolve => require(["../views/article/Article.vue"], resolve)
  },
  {
    path: "/archives",
    component: resolve => require(["../views/archive/Archive.vue"], resolve),
    meta: {
      title: "Archive"
    }
  },
  {
    path: "/albums",
    component: resolve => require(["../views/album/Album.vue"], resolve),
    meta: {
      title: "Albums"
    }
  },
  {
    path: "/talks",
    component: resolve => require(["../views/talk/Talk.vue"], resolve),
    meta: {
      title: "Talk"
    }
  },
  {
    path: "/talks/:talkId",
    component: resolve => require(["../views/talk/TalkInfo.vue"], resolve),
    meta: {
      title: "Talk"
    }
  },
  {
    path: "/albums/:albumId",
    component: resolve => require(["../views/album/Photo.vue"], resolve)
  },
  {
    path: "/tags",
    component: resolve => require(["../views/tag/Tag.vue"], resolve),
    meta: {
      title: "Tag"
    }
  },
  {
    path: "/categories",
    component: resolve => require(["../views/category/Category.vue"], resolve),
    meta: {
      title: "Category"
    }
  },
  {
    path: "/categories/:categoryId",
    component: resolve => require(["../views/article/ArticleList.vue"], resolve)
  },
  {
    path: "/tags/:tagId",
    component: resolve => require(["../views/article/ArticleList.vue"], resolve)
  },
  {
    path: "/links",
    component: resolve => require(["../views/link/Link.vue"], resolve),
    meta: {
      title: "Links"
    }
  },
  {
    path: "/about",
    component: resolve => require(["../views/about/About.vue"], resolve),
    meta: {
      title: "About"
    }
  },
  {
    path: "/message",
    component: resolve => require(["../views/message/Message.vue"], resolve),
    meta: {
      title: "Message"
    }
  },
  {
    path: "/news",
    component: resolve => require(["../views/new/News.vue"], resolve),
    meta: {
      title: "News"
    }
  },
  {
    path: "/user",
    component: resolve => require(["../views/user/User.vue"], resolve),
    meta: {
      title: "User"
    }
  },
  {
    path: "/oauth/login/qq",
    component: resolve => require(["../components/OauthLogin.vue"], resolve)
  },
  {
    path: "/oauth/login/weibo",
    component: resolve => require(["../components/OauthLogin.vue"], resolve)
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
