<template>
  <b-modal id="modal-api-registration" ok-title="save" centered scrollable v-model="registrationApiData.state" size="lg" @ok="handleOk">
    <div slot="ok-title">
        save
    </div>
    <div slot="modal-title">
        <img src="@/assets/trend-micro-logo.png" height="50">    
        {{ registrationApiData.name }}
    </div>
    <div class="mb-2">
        Base domain URL (https://dsm.example.com):
        <label class="sr-only" for="inline-form-input-baseurl">base URL (https:dns)</label>
    </div>

    <form ref="form" @submit.stop.prevent="handleSubmit">
      <b-form inline> 
        <b-form-input
          id="inline-form-input-baseurl"
          type="text"
          v-model="apiConfig.baseURL"
          class="mb-2 mr-sm-2 mb-sm-0 col-8"
          aria-describedby="input-live-help input-live-feedback"
          :placeholder="apiConfig.baseURL"
          :state="handleBaseURLInput"
          v-b-tooltip.hover title="(https://dsm.example.com)">
        </b-form-input>

        <b-input-group prepend=":" class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input
            id="inline-form-input-port"
            type="text" 
            v-model="apiConfig.port"
            aria-describedby="input-live-help input-live-feedback" 
            :placeholder="apiConfig.port"
            :state="handlePortInput"
            v-b-tooltip.hover title="communication port"
          >
          </b-form-input>
        </b-input-group>
      </b-form>
    <hr />
    <b-form-group
        id="input-group-1"
        label="Api key:"
        label-for="input-1"
        description=""
        
    >
        <b-form-input
          id="input-1"
          v-model="apiConfig.apikey"
          type="text"
          placeholder="Api key from deep security software"
          aria-describedby="input-live-help input-live-feedback"
          :state="handleApiKeyInput"
          v-b-tooltip.hover title="API key from local deepsecurity console"
          required
        >
        </b-form-input>
    </b-form-group>
    <b-form-group
        id="input-group-2"
        label="version:"
        label-for="input-2"
        description="version v1 if not changed"
        v-b-tooltip.hover title="version by default is v1"
    >
        <b-form-input
          id="input-2"
          v-model="apiConfig.version"
          type="text"
          aria-describedby="input-live-help input-live-feedback"
          :placeholder="apiConfig.version"
          :state="handleVersionInput"
          required
        >
        </b-form-input>
    </b-form-group>
    </form>
    <!-- <template #modal-footer="{ handleSubmit, cancel }">
      <b-button size="sm" variant="danger" @click="cancel()">
        cancel
      </b-button>
      <b-button size="sm" variant="success" @click="handleSubmit(data)">
        submit
      </b-button>
    </template> -->
  </b-modal>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ApiRegistration',
  props: ['apiName', 'modalShow', 'logoPath'],
  data () {
    return {
        apiConfig: {
            baseURL: 'https://dsm.example.com',
            port: '4119',
            apikey: '',
            version: 'v1'
        }
    }
  },
  mounted: function () {
  },
  watch: {
  },
  computed: {
    ...mapGetters(['registrationApiData']),
    handleBaseURLInput() {
        return this.apiConfig.baseURL === "https://dns" ? false : true
    },
    handlePortInput() {
        return this.apiConfig.port.length === 4 && !isNaN(this.apiConfig.port) ? true : false
    },
    handleApiKeyInput() {
        return this.apiConfig.apikey.length > 10 ? true : false
    },
    handleVersionInput() {
        return this.apiConfig.version.length >= 2 && this.apiConfig.version.startsWith('v') ? true : false
    },
    ...mapActions(['set_apiConfiguration'])
  },
  methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        this.$store.dispatch('set_apiConfiguration', this.apiConfig)

        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-api-registration')
        })
      }
    }
}
</script>
<style lang="stylus" scoped>

</style>