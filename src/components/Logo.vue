<template>
    <img src="../assets/axicom-security-logo.png" width="90" height="">
</template>
<script>
export default {
    name: 'logo'
}
</script>
<style lang="scss" scoped>
img {
  animation: 1s appear;
  margin-right: 15px;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>