<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <Logo />
      <b-navbar-brand href="#">
        Axicom security
      </b-navbar-brand>
      <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav> -->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form> -->

          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown> -->
          <b-nav-item center v-if="apiConfig.baseURL !== ''">{{  apiConfig.baseURL + ':' + apiConfig.port }}</b-nav-item>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>API Registration</em>
            </template>
            
            <b-dropdown-item href="#" @click="set_RegistrationApiModalData({state: true, name: 'Deepsecurity API Configuration', path: '@/assets/trend-micro-logo.png'})">
              <img class="logo" src="../assets/trend-micro-logo.png" height="35">Trend Micro DeepSecurity
            </b-dropdown-item>
            <!-- <b-dropdown-item href="#"></b-dropdown-item> -->
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import Logo from '../components/Logo'
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: 'navigation',
    components: {Logo},
    data() {
        return {
        }
    },
    computed: {
      ...mapGetters(['apiConfig'])
    },
    methods:{
    ...mapMutations(['set_RegistrationApiModalData']),
    }   
}
</script>
<style lang="scss" scoped>
// nav {
//   display: grid;
//   font-size: 16px;
//   height: 45px;
//   line-height: 45px;
//   align-items: center;
//   grid-template-columns: repeat(3, 1fr);
//   background-color: rgb(250, 250, 250);
//   box-shadow: 5px 5px 5px rgb(216, 211, 211);
// }
// .nav-header {
//   display: grid;
//   grid-template-columns: 1fr 3fr;
// }
// .group-button {
//   padding-left: 20px;
//   padding-right: 20px;
//   display: flex;
//   flex-direction: row-reverse;
// }
// .nav-item {
//   border: 1px solid rgb(200, 200, 200);
//   height: 40px;
//   line-height: 40px;
//   border-radius:5px 5px 5px 5px;
//   width: 50%;
//   text-align: center;
//   justify-self: end;
//   transform: skew(-15);
// }
// .nav-item:hover{
//   border: 2px solid rgb(99, 120, 148);
//   color: blue;
//   cursor: pointer;
// }
// .title {
//     font-family:
//     'Quicksand',
//     'Source Sans Pro',
//     -apple-system,
//     BlinkMacSystemFont,
//     'Segoe UI',
//     Roboto,
//     'Helvetica Neue',
//     Arial,
//     sans-serif;
//   color: rgb(142, 167, 182);
//   justify-self: start;
// }
// .container {
//   margin: 0 auto;
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
// }

// title {
//   font-family:
//     'Quicksand',
//     'Source Sans Pro',
//     -apple-system,
//     BlinkMacSystemFont,
//     'Segoe UI',
//     Roboto,
//     'Helvetica Neue',
//     Arial,
//     sans-serif;
//   display: block;
//   font-weight: 300;
//   font-size: 100px;
//   color: #35495e;
//   letter-spacing: 1px;
// }

// .subtitle {
//   font-weight: 300;
//   font-size: 42px;
//   color: #526488;
//   word-spacing: 5px;
//   padding-bottom: 15px;
// }

// .links {
//   padding-top: 15px;
// }
</style>