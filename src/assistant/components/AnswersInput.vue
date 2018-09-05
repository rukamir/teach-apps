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
  padding: 0.2em;
  color: blueviolet;
}
#number-selector {
  border: 0.1em;
  border-style: solid;
  border-radius: 20%;
  border-color: blueviolet;
  font-size: 1.5em;
  color: blueviolet;
  height: 1.5em;
  width: 1.5em;
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
