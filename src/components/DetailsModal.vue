<template>
  <b-modal 
  id="modal-component-details"
  size="xl"
  class="modal-lg" 
  :title="openComponent.name" 
  v-model="detailsModalShow"
  ok-only
  @ok="close"
  @close="close"
  >
    <b-row>
      <b-col>
          <Viewer :data= data />
      </b-col>
      <b-col></b-col>
    </b-row>
    
    <template #modal-footer></template>
    
  </b-modal>
</template>
<script>
import { mapGetters } from 'vuex'
import Viewer from '../components/Viewer'
export default {
  name: 'DetailsModal',
  components: { Viewer },
  props: [],
  data () {
    return {
      data: ['admin 1', 'admin 2', 'admin 3', 'admin 4', 'admin 5']
    }
  },
  mounted: function () {
    // this.$store.dispatch('findAll')
  },
  watch: {
  },
  computed: {
    ...mapGetters(['openComponent']),
    ...mapGetters(["detailsModalShow"])
  },
  methods: {
    close() {

        this.$store.dispatch('detailsModalShow', false)
    },


  }
}
</script>
<style lang="css" scoped>


</style>