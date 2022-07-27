<template>
  <div class="content">
    <div class="image">
      <div>
        <button class="logoutButton" @click.prevent="logout">Log out</button>
      </div>
      <div class="center_stats">
        <div class="user_content">
        <h1>{{ playerStats.username }} `s game Statistics</h1>
          <div v-cloak class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Circuit name</th>
                  <th>Best laptime</th>
                  <th>Car used in record</th>
                  <th>Times played in total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ playerStats.track1Stats.name }}</td>
                  <td>{{ playerStats.track1Stats.details.lapTime }}</td>
                  <td>{{ playerStats.track1Stats.details.car }}</td>
                  <td>{{ playerStats.track1Stats.details.gameTimes }}</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>{{ playerStats.track2Stats.name }}</td>
                  <td>{{ playerStats.track2Stats.details.lapTime }}</td>
                  <td>{{ playerStats.track2Stats.details.car }}</td>
                  <td>{{ playerStats.track2Stats.details.gameTimes }}</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>{{ playerStats.track3Stats.name }}</td>
                  <td>{{ playerStats.track3Stats.details.lapTime }}</td>
                  <td>{{ playerStats.track3Stats.details.car }}</td>
                  <td>{{ playerStats.track3Stats.details.gameTimes }}</td>
                </tr>
              </tbody>
            </table>
            <div class="delete-position">
              <button class="deleteButton" @click.prevent="onDelete">Delete Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PlayerStatsComponent',
  props: {
    playerStats: Object,
    logout: Function,
    onDelete: Function
  }
}
</script>

<style scoped>
[v-cloak] {
  display: none;
}
.delete-position {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}
.table-container {
  padding: 20px;
}
.content {
  position: fixed;
  top: 60px;
  right: 0;
  left: 0;
  bottom: 100px;
  width: 100%;
  margin: 0;
}
.user_content {
  position: fixed;
  bottom: 60px;
  width: fit-content;
  height: fit-content;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  background:rgba(54, 54, 54, 0.9);
  border-radius: 10px;
}
.center_stats {
  display: flex;
  justify-content: center;
}
.image{
  background-image: url('@/assets/userStats_webpage.png');
  position: absolute;
  min-width: 100vw;
  min-height: 100vh;
  background-position: center;
  background-size:100%;
}
h1 {
  text-align: center;
  color: rgba(255, 255, 255, 1);
}
.logoutButton {
  margin-top: 20px;
  background-color:rgb(221, 145, 82);
  border: none;
  width: 150px;
  padding: 5px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 3px;
  margin-left: 20px;
}
.logoutButton:hover {
  background-color: #be3c15;
  color: white;
}
.deleteButton {
  margin-top: 10px;
  margin-bottom: 10px;
  background-color:rgb(165, 179, 42);
  border: none;
  padding: 5px;
  width: 150px;
  color: rgb(0, 0, 0);
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 3px;
}
.deleteButton:hover {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
}
a {
  color: #315a48;
}
table {
  margin: auto;
  border-collapse: collapse;
  width: fit-content;
}
th,td {
  border: 1px solid black;
  background: rgba(76, 175, 80, 1);
  padding: 10px;
}
</style>
