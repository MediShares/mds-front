<template>
<div :class="['toast',{warn:isWarn},{fail:isFail}]" v-if="toastInfo">{{toastInfo}}</div>
</template>

<script>
export default {
  props: ['toastInfo', 'isWarn', 'isFail'],
  watch: {
    toastInfo(to, from) {
      setTimeout(() => {
        this.$emit('toast', '')
      }, 3000);
    }
  }
}
</script>

<style scoped>
.toast {
  border-radius: 100px;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  padding: 24px 24px 24px 60px;
  box-shadow: 0 0 4px 0 rgba(175, 175, 175, 0.5);
  background: #303032 url(../../static/img/icon/toast_yes.png)no-repeat 16px center/36px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: -68px;
  animation: toast 0.5s forwards;
  z-index: 2000;
  min-width: 200px;
}

.toast.warn {
  background-image: url(../../static/img/icon/toast_warn.jpg);
}

.toast.fail {
  background-image: url(../../static/img/icon/toast_no.jpg);
}

@keyframes toast {
  0% {
    bottom: -68px;
  }

  100% {
    bottom: 64px;
  }
}
</style>
