<template>
  <div class="content">
    <div class="image">
      <div class="center_form">
        <div class="register_content">
          <div class="register_form">
            <label>User name</label>
            <br/>
            <input class="inputBox" type="text" v-model='username' placeholder='username'/>
            <br/>
            <label>Password</label>
            <br/>
            <input class="inputBox" type="password" v-model='password' placeholder='password'/>
            <br/>
            <button class="registerButton" @click.prevent="onSubmit"> Register </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterComponent',
  props: {
    onSubmit: Function
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  position: fixed;
  top: 60px;
  bottom: 100px;
  width: 100%;
  right: 0;
  left: 0;
  margin: 0;
}
.register_form {
  text-align: center;
  border: 1px solid;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 350px;
  background-color:blanchedalmond;
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
.registerButton {
  margin-top: 15px;
  background-color:rgb(109, 178, 235);
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

.registerButton:hover {
  background-color:rgb(49, 139, 199);
  color: rgb(0, 0, 0);
}
.register_content {
  position: fixed;
  bottom: 100px;
  width: fit-content;
  height: fit-content;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  background:rgba(54, 54, 54, 0.9);
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
