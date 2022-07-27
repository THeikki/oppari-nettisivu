<template>
    <div class="alert-container">
        <p>{{ text }}</p>
        <br/>
        <button class="cancelButton" @click.prevent="cancel">NO</button>
        <br/>
        <br/>
        <button class="confirmButton" @click.prevent="deletePlayerProfile">YES</button>
    </div>
</template>
<script>
export default {
  name: 'AlertComponent',
  props: {
    deletePlayerProfile: Function,
    cancel: Function,
    text: String
  }
}
</script>
<style scoped>
button {
    width: 150px;
}
button:hover {
    background-color: aqua;
}
.alert-container {
  position: fixed;
  top: 0px;
  height: fit-content;
  background-color:rgb(233, 130, 130);
  padding: 20px;
  text-align: center;
}
.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.cancelButton {
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

.cancelButton:hover {
  background-color:rgb(0, 136, 247);
  color: rgb(0, 0, 0);
}
.confirmButton {
  margin-top: 15px;
  background-color:rgb(209, 43, 43);
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

.confirmButton:hover {
  background-color: rgb(27, 22, 22);
  color: white;
}
p {
  text-align: center;
  font-size:  18px;
  color: black;
}
</style>
