<template>
  <div>
    <div id="questions-label" class="top-card">
      <h2>Questions</h2>
    </div>
    <div id="number-display" class="body-card">
      <b-form-select v-model="current" :options="dropDownChoices" />
    </div>
    <div id="answer-selector" class="bottom-card">
      <AnswerChoices :GetSelection="SelectedAnswer" :selected="ops[current - 1]"></AnswerChoices>
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
import AnswerChoices from './AnswerChoices.vue';

export default {
  name: "Answersinput",
  props: [
    "SetAllAnswers",
    ],
  components: {
    AnswerChoices,
  },
  data() {
    return {
      current: 1,
      ops: [""],
      selections: [],
      dropDownChoices: [],
    };
  },
  created() {
    this.GetNumberOfInputs();
  },
  methods: {
    SelectedAnswer(e) {
      const value = e.target.getAttribute('value');
      if (this.ops.length >= this.current) {
        this.ops[this.current - 1] = value;
      } else {
        this.ops.push(value);
      }

      this.current += 1;
      this.GetNumberOfInputs()
      this.SetAllAnswers(this.ops);
    },
    GetNumberOfInputs() {
      var inputs = this.ops.map((_, ind) => {
        return ind + 1;
      });
      if (this.ops.length < this.current) { 
        inputs.push(this.ops.length + 1);
      }
      this.dropDownChoices = inputs;
    },
  }
}
</script>
