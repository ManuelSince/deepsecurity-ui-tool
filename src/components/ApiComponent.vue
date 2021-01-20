<template>
  <div class="component-minify" @click="setOpenComponent(tagData)">
    <div :style="{backgroundColor: color, borderRadius: '5px 5px 5px 5px'}"></div>
    <div class="custom-grid">
      <div class="component-header text-wrap text-center" :style="{}">{{ tagData.name }}</div>
      <div class="component-footer text-wrap">{{ 'description' }}</div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    name: 'ApiComponent',
    components: {  },
    props: ['tagData', 'color', 'isOpenArray'],
    data() {
        return {
        }
    },
    computed: {
      ...mapGetters(['openComponent'])
    },
    methods: {
      ...mapMutations(['set_RegistrationApiModalData']),
      ...mapActions(['setOpenComponent']),

      // isOpenComponent(name)
      //   console.log(name)
      // }
    }   
}
</script>
<style lang="scss" scoped>
  .component-minify{
    display: grid;
    grid-template-columns: 10px 1fr;
    height: 80px;
    width: 30%;
    box-shadow: 0px 0px 0px 2px rgba(128, 128, 128, 0.342);
    border-radius: 5px 5px 5px 5px;
    margin: 3px 3px;

  }
  .component-minify:hover{
    display: grid;
    grid-template-columns: 10px 1fr;
    height: 80px;
    width: 30%;
    box-shadow: 0px 0px 0px 2px rgba(128, 128, 128, 0.342);
    border-radius: 5px 5px 5px 5px;
    margin: 3px 3px;
    cursor: pointer;
  }
  .component-maxify {
    display: grid;
    grid-template-rows: 40px 500px;
    width: 100%;

  }
  .custom-grid{
    display: grid;
    grid-template-rows: 1fr 2fr;
  }
  .component-header{
    background-color: rgba(128, 128, 128, 0.26);
    color: black;
    font-weight: 500;
  }
</style>