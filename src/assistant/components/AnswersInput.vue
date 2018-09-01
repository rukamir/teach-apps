<template>
  <div>
    <div id="questions-label" class="top-card">
      <h2>Questions</h2>
    </div>
    <div id="number-display" class="body-card">
      <scroll-picker class="testtest" v-model="current" :options="ops"></scroll-picker>
    </div>
    <div @click=IncreaseOps() id="answer-selector" class="bottom-card">
      abcd
    </div>
  </div>
</template>

<style>
.testtest {
  height: 7em !important;
  background-color: aqua;
}
#number-display{
  background-color: white;
}
</style>

<script>
import {ScrollPicker, ScrollPickerGroup} from 'vue-scroll-picker';

export default {
  name: "Answersinput",
  components: {
    ScrollPicker,
    ScrollPickerGroup,
  },
  data() {
    return {
      current: 1,
      ops: [1,2,3,4],
    };
  },
  mounted() {
  },
  methods: {
    IncreaseOps() {
      console.log("adding stuff");
      this.ops.push(this.ops.length + 1);
    },
  }
}
</script>
