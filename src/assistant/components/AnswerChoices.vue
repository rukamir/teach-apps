<template>
  <div>
    <div v-for="item in types.type1" :key="item" :class="{ 'input-button': true, 'input-selected': selected == item.toUpperCase() }" @click="GetSelection" :value="item.toUpperCase()">{{ item.toUpperCase() }}</div>
  </div>
</template>

<style>
.input-selected {
  background-color: red !important;
}
.input-button {
  border: solid;
  border-width: 0.15em;
  border-color: blueviolet;
  border-radius: 50%;
  background-color: rgb(232, 207, 255);
  margin: auto;
  margin-top: 0.1em;
  margin-bottom: 0.1em;
  width: 2em;
  height: 2em;
  font-size: 2.5em;
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

