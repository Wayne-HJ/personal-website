<template>
  <div>
    <!-- banner -->
    <div class="banner" :style="cover">
      <h1 class="banner-title">EVERY DAY NEWS</h1>
    </div>
    <!-- 标签列表 -->
    <v-card class="blog-container">
      <div class="tag-cloud-title">{{ newsTitle }}</div>

      <div class="tag-cloud-stitle">{{ newsDate }}</div>
      <div class="tag-cloud">
        <div
          :style="{ 'font-size': '18px','display':'flex','margin':'2px 0px' }"
          v-for="(item,index) in newsList"
          :key="index"
        >
          <div style="color: #bf4643">{{index+1}}.&nbsp;</div>
          <div>{{ item }}</div>
        </div>
      </div>
      <div class="tag-cloud-stitle">{{ sentence }}</div>
    </v-card>
  </div>
</template>

<script>
export default {
  created() {
    this.listTags();
  },
  data: function() {
    return {
      newsList: [],
      newsDate: '',
      newsTitle: '',
      sentence: '',

    };
  },
  methods: {
    listTags() {
      this.axios.get("/getNews").then(({ data }) => {
        this.newsList = data.data.news;
        this.newsDate = data.data.date;
        this.newsTitle = data.data.title;
        this.sentence = data.data.weiyu.split('】')[1];


      });
    }
  },
  computed: {
    cover() {
      var cover = "";
      this.$store.state.blogInfo.pageList.forEach(item => {
        if (item.pageLabel == "tag") {
          cover = item.pageCover;
        }
      });
      return "background: url(" + cover + ") center center / cover no-repeat";
    }
  }
};
</script>

<style scoped>
.tag-cloud-title {
  line-height: 2;
  font-size: 36px;
  text-align: center;
}
.tag-cloud-stitle {
  line-height: 2;
  font-size: 26px;
  text-align: center;
}
@media (max-width: 759px) {
  .tag-cloud-title {
    font-size: 25px;
  }
  .tag-cloud-stitle {
    font-size: 15px;
  }
}
.tag-cloud {
  text-align: left;
}
.tag-cloud a {
  color: #616161;
  display: inline-block;
  text-decoration: none;
  padding: 0 8px;
  line-height: 2;
  transition: all 0.3s;
}
.tag-cloud a:hover {
  color: #03a9f4 !important;
  transform: scale(1.1);
}
</style>
