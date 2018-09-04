<template>
  <div id="choice-group">
    <div class="input-section" v-for="item in types.type1" :key="item">
      <div :class="{ 'input-button': true, 'input-selected': selected == item.toUpperCase() }" @click="GetSelection" :value="item.toUpperCase()">{{ item.toUpperCase() }}</div>
    </div>
  </div>
</template>

<style>
#choice-group {
  margin: auto;
  width: 4em;
}
.input-section {
}
.input-selected {
  background-color: red !important;
}
.input-button {
  border: solid;
  border-width: 0.15em;
  border-color: blueviolet;
  border-radius: 50%;
  background-color: rgb(232, 207, 255);
  margin: 0.2em;
  width: 2em;
  height: 2em;
  font-size: 4em;
}
</style>

<script>
export default {
  name: "AnswerChoices",
  props: [
    'GetSelection',
    'selected',
  ],
  data() {
    return {
      types: {
        type1: ['a', 'b', 'c', 'd', 'e'],
      },
    };
  },
}
</script>

