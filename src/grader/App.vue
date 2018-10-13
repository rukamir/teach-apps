<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <QuestionCount/>
    <GradeList />
  </div>
</template>

<script>
import QuestionCount from './components/QuestionCount';
import GradeList from './components/GradeList';

export default {
  name: 'app',
  components: {
    GradeList,
    QuestionCount,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
