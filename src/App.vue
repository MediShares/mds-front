<template>
  <div id="app">
    <mds-nav v-if="isNavShow"></mds-nav>
    <router-view />
    <mds-toast :toastInfo="toastInfo" :isWarn="isWarn" @toast="infoByToast"></mds-toast>
  </div>
</template>

<script>
import mdsNav from "@/base/mdsNav";
import user from "static/js/user";
import mdsToast from "@/base/toast";
export default {
  name: "App",
  data() {
    return {
      toastInfo: "",
      isWarn: true,
      isNavShow: true
    };
  },
  mounted() {
    this.$router.afterEach((to, from) => {
      if (to.meta.login) {
        this.loginByScatter();
      }
      window.scrollTo(0, 0);
    });
  },
  methods: {
    infoByToast: function(val) {
      this.toastInfo = val;
    },
    loginByScatter() {
      user.getAccount().then(
        res => {
          $(".currentAccount").html(res.name);
          $("#login").modal("hide");
          $(".login").hide();
          $(".personal").show();
        },
        () => {
          if (this.$route.path == "/projectRelease") {
            this.$router.push("/");
          }
          // 未安装 scatter 或 登录失败
          this.toastInfo = this.$t("connect_scatter");
        }
      );
    }
  },
  components: {
    mdsNav,
    mdsToast
  }
};
</script>

<style>
</style>
