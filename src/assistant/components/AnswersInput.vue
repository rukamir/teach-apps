<template>
  <div>
    <div id="questions-label" class="top-card">
      <h2>Questions</h2>
    </div>
    <div id="number-display" class="body-card">
      <b-form-select v-model="current" :options="ops" />
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

export default {
  name: "Answersinput",
  props: ["SetAnswers"],
  components: {
  },
  data() {
    return {
      current: 1,
      ops: [1,2,3,4],
      selections: []
    };
  },
  mounted() {
  },
  methods: {
    IncreaseOps() {
      // eslint-disable-next-line
      console.log("adding stuff");
      const next = this.ops.length + 1;
      this.ops.push(next);
      this.current = next;
    },
  }
}
</script>
