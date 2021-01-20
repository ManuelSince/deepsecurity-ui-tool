<template>
  <div class="center">
    <Nav />
    <ApiRegistrationModal />
    <MainPage />
  </div>
</template>
<script>
import ApiRegistrationModal from './components/ApiRegistrationModal.vue'
import Nav from './components/Nav'
import MainPage from './components/MainPage'

export default {
  name: 'App',
  components: {
    Nav,
    ApiRegistrationModal,
    MainPage
  },
  data() {
    return {
    }
  },
  watch: {
  },
  methods: {
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.center{
  align-content: center;
  text-align: center;;
}
</style>
