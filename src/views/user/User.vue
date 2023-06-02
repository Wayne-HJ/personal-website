<template>
  <div>
    <div class="banner" :style="cover">
      <h1 class="banner-title">USER</h1>
    </div>
    <v-card class="blog-container">
      <div>
        <span class="info-title">Basic Information</span>
      </div>
      <v-row class="info-wrapper">
        <v-col md="3" cols="12">
          <button id="pick-avatar">
            <v-avatar size="140">
              <img :src="this.$store.state.avatar" />
            </v-avatar>
          </button>
          <avatar-cropper
            @uploaded="uploadAvatar"
            trigger="#pick-avatar"
            upload-url="/api/users/avatar"
          />
        </v-col>
        <v-col md="7" cols="12">
          <v-text-field
            v-model="userInfo.nickname"
            label="NickName"
            placeholder="input your nick name"
          />
          <v-text-field
            v-model="userInfo.webSite"
            class="mt-7"
            label="WebSite"
            placeholder="http://your webSite"
          />
          <v-text-field
            v-model="userInfo.intro"
            class="mt-7"
            label="Intro"
            placeholder="Introduce yourself"
          />
          <div v-if="loginType != 0" class="mt-7 binding">
            <v-text-field
              disabled
              v-model="email"
              label="Email"
              placeholder="Please bind the email"
            />
            <v-btn v-if="email" text small @click="openEmailModel">
              Edit
            </v-btn>
            <v-btn v-else text small @click="openEmailModel">
              Bind
            </v-btn>
          </div>
          <v-btn @click="updataUserInfo" outlined class="mt-5">Update</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import AvatarCropper from "vue-avatar-cropper";
export default {
  components: { AvatarCropper },
  data: function() {
    return {
      userInfo: {
        nickname: this.$store.state.nickname,
        intro: this.$store.state.intro,
        webSite: this.$store.state.webSite,
        loginType: this.$store.state.loginType
      }
    };
  },
  methods: {
    updataUserInfo() {
      this.axios.put("/api/users/info", this.userInfo).then(({ data }) => {
        if (data.flag) {
          this.$store.commit("updateUserInfo", this.userInfo);
          this.$toast({ type: "success", message: "修改成功" });
        } else {
          this.$toast({ type: "error", message: data.message });
        }
      });
    },
    uploadAvatar(data) {
      if (data.flag) {
        this.$store.commit("updateAvatar", data.data);
        this.$toast({ type: "success", message: "上传成功" });
      } else {
        this.$toast({ type: "error", message: data.message });
      }
    },
    openEmailModel() {
      this.$store.state.emailFlag = true;
    }
  },
  computed: {
    email() {
      return this.$store.state.email;
    },
    loginType() {
      return this.$store.state.loginType;
    },
    cover() {
      var cover = "";
      this.$store.state.blogInfo.pageList.forEach(item => {
        if (item.pageLabel == "user") {
          cover = item.pageCover;
        }
      });
      return "background: url(" + cover + ") center center / cover no-repeat";
    }
  }
};
</script>

<style scoped>
.info-title {
  font-size: 1.25rem;
  font-weight: bold;
}
.info-wrapper {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
#pick-avatar {
  outline: none;
}
.binding {
  display: flex;
  align-items: center;
}
</style>
