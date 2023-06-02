<template>
  <div>
    <!-- banner -->
    <div class="banner" :style="cover">
      <h1 class="banner-title">BLOG</h1>
    </div>
    <v-row class="article-container">
      <v-col md="9" cols="12">
        <!-- 归档列表 -->
        <v-card class="article-wrapper">
          <timeline>
            <timeline-title v-if="count>1"> till now {{ count }} articles，keep going </timeline-title>
            <timeline-title v-if="count<2"> till now {{ count }} article，keep going </timeline-title>
            <timeline-item v-for="item of archiveList" :key="item.id">
              <!-- 日期 -->
              <span class="time">{{ item.createTime | date }}</span>
              <!-- 文章标题 -->
              <router-link
                  :to="'/articles/' + item.id"
                  style="color:#666;text-decoration: none"
              >
                {{ item.articleTitle }}
              </router-link>
            </timeline-item>
          </timeline>
          <!-- 分页按钮 -->
          <v-pagination
              color="#00C4B6"
              v-model="current"
              :length="Math.ceil(count / 10)"
              total-visible="7"
          />
        </v-card>
      </v-col>
      <v-col md="3" cols="12" class="d-md-block d-none">
        <!-- 类别 -->
        <v-card class="right-container">
          <router-link to="/categories">
          <div class="right-title">
            <i class="iconfont iconfenlei" style="font-size:16.8px" />
            <span style="margin-left:10px">Categories</span>
          </div>
          </router-link>
          <div class="article-list" >
            <router-link v-for="item of categoryList"
                         :key="item.id"
                         :to="'/categories/' + item.id">
            <div class="article-item">
              <div class="content">
                <div class="content-title">
                  <a>{{ item.categoryName }}</a>
                </div>
              </div>
            </div>
            </router-link>

          </div>
        </v-card>
        <!--标签-->
        <v-card class="right-container" style="margin-top:20px">
          <router-link to="/tags">
          <div class="right-title">
            <i class="iconfont iconbiaoqian" style="font-size:16.8px" />
            <span style="margin-left:10px">Tags</span>
          </div>
          </router-link>
          <div class="article-list" >
            <router-link v-for="item of tagList"
                         :key="item.id"
                         :to="'/tags/' + item.id">
              <div class="article-item">
                <div class="content">
                  <div class="content-title">
                    <a>{{ item.tagName }}</a>
                  </div>
                </div>
              </div>
            </router-link>

          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { Timeline, TimelineItem, TimelineTitle } from "vue-cute-timeline";
export default {
  created() {
    this.listArchives();
    this.listCategories();
    this.listTags();
  },
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle
  },
  data: function() {
    return {
      current: 1,
      count: 0,
      categoryList: [],
      tagList: [],
      archiveList: []
    };
  },
  methods: {
    listArchives() {
      this.axios
        .get("/api/articles/archives", {
          params: { current: this.current }
        })
        .then(({ data }) => {
          this.archiveList = data.data.recordList;
          this.count = data.data.count;
        });
    },
    listCategories() {
      this.axios.get("/api/categories").then(({ data }) => {
        this.categoryList = data.data.recordList;
        // this.count = data.data.count;
      });
    },
    listTags() {
      this.axios.get("/api/tags").then(({ data }) => {
        this.tagList = data.data.recordList;
        // this.count = data.data.count;
      });
    },
  },
  computed: {
    cover() {
      var cover = "";
      this.$store.state.blogInfo.pageList.forEach(item => {
        if (item.pageLabel == "archive") {
          cover = item.pageCover;
        }
      });
      return "background: url(" + cover + ") center center / cover no-repeat";
    }
  },
  watch: {
    current(value) {
      this.axios
        .get("/api/articles/archives", {
          params: { current: value }
        })
        .then(({ data }) => {
          this.archiveList = data.data.recordList;
          this.count = data.data.count;
        });
    }
  }
};
</script>

<style scoped>
.time {
  font-size: 0.75rem;
  color: #555;
  margin-right: 1rem;
}
.right-container {
  padding: 20px 24px;
  font-size: 14px;
}
.right-title {
  display: flex;
  align-items: center;
  line-height: 2;
  font-size: 16.8px;
  margin-bottom: 6px;
}
.right-title i {
  font-weight: bold;
}
.article-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.article-item {
  display: flex;
  align-items: center;
  padding: 6px 0;
}
.article-item:first-child {
  padding-top: 0;
}
.article-item:last-child {
  padding-bottom: 0;
}
.article-item:not(:last-child) {
  border-bottom: 1px dashed #f5f5f5;
}
.article-item img {
  width: 100%;
  height: 100%;
  transition: all 0.6s;
  object-fit: cover;
}
.article-item img:hover {
  transform: scale(1.1);
}
.content {
  flex: 1;
  padding-left: 10px;
  word-break: break-all;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
}
.content-cover {
  width: 58.8px;
  height: 58.8px;
  overflow: hidden;
}
.content-title a {
  transition: all 0.2s;
  font-size: 95%;
}
.content-title a:hover {
  color: #2ba1d1;
}
.content-time {
  color: #858585;
  font-size: 85%;
  line-height: 2;
}
</style>
