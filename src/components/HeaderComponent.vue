<template>
    <header class="header">
        <div class="center">
            <nav v-if="isAccessable">
                <router-link to="/">Home</router-link> |
                <router-link to="/register">Register</router-link>
            </nav>
        </div>
    </header>
    <router-view/>
</template>
<script>
export default {
  computed: {
    isAccessable: {
      get () {
        return this.$store.state.isAccessable
      }
    }
  }
}
</script>
<style scoped>
.header {
    position: fixed;
    background-color:rgb(31, 27, 27);
    top: 0;
    right: 0;
    left: 0;
    height: 60px;
    margin: 0;
}
.center {
    position: absolute;
    top: 50%;
    left: 10%;
}
nav {
    padding: 30px;
}
nav a {
    font-weight: bold;
    color: #ddcbcb;
}
nav a.router-link-exact-active {
    color: #42b983;
}
</style>
