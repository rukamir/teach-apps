<template>
  <div>
    <div id="questions-label" class="top-card">
      <h2>Questions</h2>
    </div>
    <div id="number-display" class="body-card">
      <div id="number-display-group">
        <span>Current: </span>
        <b-form-select id="number-selector" v-model="current" :options="GetNumberOfInputs" />
      </div>
    </div>
    <div id="answer-selector" class="bottom-card">
      <AnswerChoices :GetSelection="SelectedAnswer" :selected="answers[current - 1]"></AnswerChoices>
    </div>
  </div>
</template>

<style>
#number-display-group {
  margin: auto;
  font-size: 2em;
  max-width: 15%;
  padding: 0.2em;
}
#number-selector {
  border: 0.1em;
  border-style: solid;
  font-size: 1.5em;
  height: 1.6em;
}
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
    "answers",
    ],
  components: {
    AnswerChoices,
  },
  data() {
    return {
      current: 1,
      selections: [],
      dropDownChoices: [],
    };
  },
  methods: {
    SelectedAnswer(e) {
      const value = e.target.getAttribute('value');
      if (this.answers.length >= this.current) {
        this.answers[this.current - 1] = value;
      } else {
        this.answers.push(value);
      }

      this.current += 1;
    },
  },
  computed: {
    GetNumberOfInputs() {
      var inputs = this.answers.map((_, ind) => {
        return ind + 1;
      });
      inputs.push(this.answers.length + 1);
      this.dropDownChoices = inputs;
      return this.dropDownChoices;
    },
  }
}
</script>
