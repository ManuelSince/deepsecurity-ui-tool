<template>
  <b-container class="">
      <div class="item" v-for="item in data" :key="item" @click="itemDetails(item)">{{ item }}</div>
    </b-container>
</template>
<script>
export default {
  name: 'viewer all',
  props: ['data'],
  methods:{
    itemDetails (item) {
      console.log(item)
    }
  }
  
}
</script>
<style lang="scss" scoped>
.item{
  border-radius: 3px 3px 3px;
  margin: 2px 2px;
  border: 1px dotted gray;
}
</style>