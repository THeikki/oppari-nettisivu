<template>
  <div class="content">
    <div class="image">
      <div class="center_form">
        <div class="login_content">
          <div class="login_form">
            <label>User name</label>
            <br/>
            <input class="inputBox" type="text" v-model='username' placeholder='username'/>
            <br/>
            <label>Password</label>
            <br/>
            <input class="inputBox" type="password" v-model='password' placeholder='password'/>
            <br/>
            <button class="loginButton" @click.prevent="login"> Log in </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  props: {
    login: Function
  },
  computed: {
    username: {
      get () {
        return this.$store.state.username
      },
      set (username) {
        this.$store.commit('setUsername', username)
      }
    },
    password: {
      get () {
        return this.$store.state.password
      },
      set (password) {
        this.$store.commit('setPassword', password)
      }
    }
  }
}
</script>
<style scoped>
.content {
  position: fixed;
  top: 60px;
  right: 0;
  left: 0;
  bottom: 100px;
  width: 100%;
  margin: 0;
}
.login_form {
  text-align: center;
  border: 1px solid;
  padding: 10px;
  width: 350px;
  background-color:rgb(187, 224, 172);
  border-radius: 5px;
}
.image{
  background-image: url('@/assets/start_webpage.png');
  position: absolute;
  min-width: 100vw;
  min-height: 100vh;
  background-position: center;
  background-size:100%;
}
.loginButton {
  margin-top: 15px;
  background-color:rgb(29, 165, 108);
  border: 1px solid transparent;
  width: 150px;
  padding: 5px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 3px;
}

.loginButton:hover {
  background-color:rgb(17, 97, 50);
  color: rgb(0, 0, 0);
}
.login_content {
  position: fixed;
  bottom: 100px;
  width: fit-content;
  height: fit-content;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
}
.center_form {
  display: flex;
  justify-content: center;
}
.inputBox {
  width: 200px;
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
}
p {
  text-align: center;
}
h1 {
  text-align: center;
}
</style>
