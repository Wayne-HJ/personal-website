<template>
  <v-footer app padless absolute v-if="!this.isMessage">
    <div class="footer-wrap">
      <div>
        ©{{ blogInfo.websiteConfig.websiteCreateTime | year }} -
        {{ new Date().getFullYear() }} By
        {{ blogInfo.websiteConfig.websiteAuthor }}
      </div>
      <a href="https://beian.miit.gov.cn/" target="_blank">
        {{ blogInfo.websiteConfig.websiteRecordNo }}
      </a>
    </div>
  </v-footer>
</template>

<script>
export default {
  computed: {
    isMessage() {
      return this.$route.path == "/message";
    },
    blogInfo() {
      return this.$store.state.blogInfo;
    }
  }
};
</script>

<style scoped>
.footer-wrap {
  width: 100%;
  line-height: 1;
  position: relative;
  padding: 40px 20px;
  color: #eee;
  font-size: 14px;
  text-align: center;
  /*background: linear-gradient(-45deg, #ee7752, #23a6d5, #3fada8);*/
  /*background: linear-gradient(to right, #bdc3c7, #2c3e50,#131a2d);*/
  /*background: linear-gradient(to right, rgba(255, 216, 155, 0.6), rgba(25, 84, 123, 0.7), rgba(19, 26, 45, 0.8));*/
  background: linear-gradient(60deg, rgba(44, 62, 80, 0.8), rgba(52, 152, 219, 0.8));


  background-size: 400% 400%;
  animation: Gradient 10s ease infinite;
}
.footer-wrap a {
  color: #eee !important;
}
@keyframes Gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>
