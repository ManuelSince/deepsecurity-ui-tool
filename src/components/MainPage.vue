<template>
  <div>
    <DetailsModal />
    <ul class="api-component-container" >
      <ApiComponent  v-for="(tag, index) in tags" :key="tag.name" :tagData="tag" :color="colors[index]" :isOpenArray="isOpen"  />
    </ul>
  </div>
</template>
<script>
import ApiComponent from '../components/ApiComponent'
import DetailsModal from '../components/DetailsModal'
import { mapGetters } from 'vuex'
import configuration from '../configuration.json'
export default {
    name: 'MainPage',
    components: { ApiComponent, DetailsModal },
    computed: {
      tags: function() {
        return configuration.tags
      },
      colors: function() {
        return configuration.colors
      },
      ...mapGetters(['openComponent'])
    },
    data() {
        return {
          isOpen: []
        }
    },
    methods:{
      populateOpenArray(name) {
        console.log(name)
        console.log(this.isOpen.push(name))
      }
    }   
}
</script>
<style lang="scss" scoped>

  .api-component-container{
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 15px;
    justify-content: center;
    width: 100%;
  }

</style>