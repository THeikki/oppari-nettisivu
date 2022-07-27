import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    username: '',
    password: '',
    showValues: false,
    showLogin: true,
    showDeleteComponent: false,
    isAccessable: true,
    playerStats: {
      _id: '',
      username: '',
      track1Stats: {
        name: '',
        details: {
          car: '',
          laptime: '',
          gameTimes: null
        }
      },
      track2Stats: {
        name: '',
        details: {
          car: '',
          laptime: '',
          gameTimes: null
        }
      },
      track3Stats: {
        name: '',
        details: {
          car: '',
          laptime: '',
          gameTimes: null
        }
      }
    }
  },
  getters: {},
  mutations: {
    setUsername (state, value) {
      state.username = value
    },
    setPassword (state, value) {
      state.password = value
    },
    setPlayerStats (state, value) {
      state.playerStats = value
    },
    deletePlayerProfile (state, id) {
      state.playerStats._id = id
    }
  },
  actions: {
    onDelete () {
      this.state.showDeleteComponent = true
    },
    cancel () {
      this.state.showDeleteComponent = false
    },
    onSubmit ({ commit, dispatch }) {
      if (!this.state.username) {
        alert('Please give user name')
        commit('setUsername', '')
        return
      }
      if (!this.state.password) {
        alert('Please give password')
        commit('setPassword', '')
        return
      }
      dispatch('register')
    },
    logout () {
      localStorage.clear()
      this.state.showValues = false
      this.state.showLogin = true
      this.state.isAccessable = true
      console.log('Logged out successfully' + '\n' + 'Session cleared')
    },
    async login ({ commit, dispatch }) {
      await axios
        .post('https://oppari-api.herokuapp.com/api/users/login', {
          username: this.state.username,
          password: this.state.password
        })
        .then((response) => {
          var alertMessage = JSON.stringify(response.data.message)
          if (alertMessage) {
            alert(alertMessage)
            commit('setUsername', '')
            commit('setPassword', '')
            return
          }
          var token = JSON.stringify(response.data.token)
          var id = JSON.stringify(response.data.id)
          localStorage.setItem('token', token)
          localStorage.setItem('userId', id)
          console.log(token)
          console.log(id)
          commit('setUsername', '')
          commit('setPassword', '')
          dispatch('getPlayerStats')
        })
        .catch(error => {
          alert(error, 'Virhe')
          console.log(error)
          commit('setUsername', '')
          commit('setPassword', '')
        })
    },
    async register ({ commit }) {
      await axios
        .post('https://oppari-api.herokuapp.com/api/users/register', {
          username: this.state.username,
          password: this.state.password
        })
        .then((response) => {
          var alertMessage = JSON.stringify(response.data.message)
          if (alertMessage) {
            alert(alertMessage)
            commit('setUsername', '')
            commit('setPassword', '')
          }
        })
        .catch(err => {
          var alertMessage = JSON.stringify(err.message)
          alert(alertMessage)
          console.log(err)
          commit('setUsername', '')
          commit('setPassword', '')
        })
    },
    async getPlayerStats ({ commit }) {
      const id = JSON.parse(localStorage.getItem('userId'))
      const token = JSON.parse(localStorage.getItem('token'))
      await axios
        .get('https://oppari-api.herokuapp.com/api/users/' + id, {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        .then((response) => {
          commit('setPlayerStats', response.data)
          this.state.showValues = true
          this.state.showLogin = false
          this.state.isAccessable = false
        })
        .catch((error) => {
          // alert(error, 'Virhe')
          console.log(error)
        })
    },
    async deletePlayerProfile ({ commit }) {
      const id = JSON.parse(localStorage.getItem('userId'))
      const token = JSON.parse(localStorage.getItem('token'))
      await axios
        .delete('https://oppari-api.herokuapp.com/api/users/' + id, {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        .then((response) => {
          console.log(response.data.message)
          var alertMessage = JSON.stringify(response.data.message)
          alert(alertMessage)
          localStorage.clear()
          commit('deletePlayerProfile', id)
          this.state.showDeleteComponent = false
          this.state.showValues = false
          this.state.showLogin = true
          this.state.isAccessable = true
        })
        .catch((error) => {
          // alert(error, 'Virhe')
          console.log(error)
        })
    }
  },
  modules: {
  }
})
