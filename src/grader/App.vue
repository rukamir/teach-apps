<template>
  <div id="app">
    <div id="display-group">
      <div>
        <div class="display-changer" @click=decreaseDisplay><v-icon name="minus-square" scale="3" /></div>
        <div id="display">{{questionTotal}}</div>
        <div class="display-changer" @click=increaseDisplay><v-icon name="plus-square" scale="3" /></div>
      </div>
      <div class="subdisplay">Total Number of Problems</div>
    </div>
    <div id="answers-group">
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
      questionTotal: 15,
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
  padding-top: 100px;
}
#display-group {
  position: fixed;
  width: 100%;
  height: 100px;
  background-color: aquamarine;
}
#display {
  display: inline-block;
  max-width: 50%;
  min-width: 30%;
  font-size: 3em;
}
.subdisplay {
  font-size: 1em;
}
.display-changer {
  display: inline-block;
  max-width: 25%;
  min-width: 20%;
}
</style>
