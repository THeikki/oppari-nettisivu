<template>
  <div v-show="showLogin">
    <LoginComponent
    :login='login'
    />
  </div>
  <div v-show="showValues">
    <PlayerStatsComponent
    :playerStats='playerStats'
    :logout='logout'
    :onDelete='onDelete'
    />
  </div>
  <div v-show="showDeleteComponent">
    <AlertComponent
    :deletePlayerProfile='deletePlayerProfile'
    :cancel='cancel'
    :text='text'
    />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginComponent from '@/components/LoginComponent.vue'
import PlayerStatsComponent from '@/components/PlayerStatsComponent.vue'
import AlertComponent from '@/components/AlertComponent.vue'
import { mapActions } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    LoginComponent,
    PlayerStatsComponent,
    AlertComponent
  },
  data () {
    return {
      text: 'Do you want to delete your profile?'
    }
  },
  computed: {
    playerStats () {
      return this.$store.state.playerStats
    },
    showValues () {
      return this.$store.state.showValues
    },
    showLogin () {
      return this.$store.state.showLogin
    },
    showDeleteComponent () {
      return this.$store.state.showDeleteComponent
    }
  },
  methods: {
    ...mapActions([
      'login',
      'logout',
      'onDelete',
      'deletePlayerProfile',
      'cancel'
    ])
  }
}
</script>
<style scoped>
</style>
