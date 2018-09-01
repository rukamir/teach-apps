<template>
  <div id="app">
    <div id="top-bar">
      <h2>top bar</h2>
    </div>
    <div id="main-card">
      <AnswersInput />
    </div>
  </div>
</template>

<script>
import AnswersInput from './components/AnswersInput.vue'

export default {
  name: 'app',
  components: {
    AnswersInput,
  }
}
</script>

<style>
#top-bar {
  border: solid;
  border-width: 0em 0em 0.1em 0em;
  border-color: #e7e7e7;
  background-color: #f6f6f6;
  margin-bottom: 1em;
}
#main-card {
  margin: auto;
  background-color: #f6f6f6;
  max-width: 50%;
  min-width: 350px;
}
.top-card {
  border: solid;
  border-radius: 15px 15px 0px 0px;
  border-color: blueviolet;
  border-width: 0.3em;
  color: blueviolet;
  background-color: rgb(232, 207, 255);
}
.body-card {
  border: solid;
  border-color: blueviolet;
  border-width: 0em 0.3em 0em 0.3em;
}
.bottom-card {
  border: solid;
  border-radius: 0px 0px 15px 15px;
  border-color: blueviolet;
  border-width: 0.3em;
  color: blueviolet;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
