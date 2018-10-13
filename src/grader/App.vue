<template>
  <div id="app">
    <div id="display-group">
      <div class="display-changer" @click=decreaseDisplay><v-icon name="minus-square" scale="3" /></div>
      <div id="display">{{questionTotal}}</div>
      <div class="display-changer" @click=increaseDisplay><v-icon name="plus-square" scale="3" />
      </div>
    </div>
    <div id="answers-group">
      <img alt="Vue logo" src="./assets/logo.png">
      <GradeList :total=questionTotal />
    </div>
  </div>
</template>

<script>
import GradeList from './components/GradeList';

import 'vue-awesome/icons/plus-square.js';
import 'vue-awesome/icons/minus-square.js';

export default {
  name: 'app',
  components: {
    GradeList,
  },
  data() {
    return {
      questionTotal: 40,
    };
  },
  methods: {
    increaseDisplay() {
      this.questionTotal = this.questionTotal + 1;
    },
    decreaseDisplay() {
      this.questionTotal = this.questionTotal - 1;
    },
  },
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#answers-group {
  padding-top: 15%;
}
#display-group {
  position: fixed;
  width: 100%;
  height: 15%;
  background-color: aquamarine;
}
#display {
    display: inline-block;
    max-width: 50%;
    min-width: 30%;
    font-size: 4em;
}
.display-changer {
    display: inline-block;
    max-width: 25%;
    min-width: 20%;
}
</style>
