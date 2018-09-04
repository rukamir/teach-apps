<template>
  <div>
    <div id="questions-label" class="top-card">
      <h2>Questions</h2>
    </div>
    <div id="number-display" class="body-card">
      <b-form-select v-model="current" :options="dropDownChoices" />
      <select v-model="current">
        <option v-for="item in dropDownChoices" :selected="current == item" :value="item" :key="item">{{item}}</option>
      </select>
    </div>
    <div id="answer-selector" class="bottom-card">
      <AnswerChoices :GetSelection="SelectedAnswer"></AnswerChoices>
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
        console.log("updated old");
      } else {
        this.ops.push(value);
        console.log("added new");
      }

      console.log("assigning next", this.current);
      this.current += 1;
      this.GetNumberOfInputs()
      console.log('increment current');
      this.SetAllAnswers(this.ops);
      console.log("next", this.current);
    },
    GetNumberOfInputs() {
      console.log("num called", this.current);
      var inputs = this.ops.map((_, ind) => {
        return ind + 1;
      });
      if (this.ops.length < this.current) { 
        inputs.push(this.ops.length + 1);
      }
      
      console.log("inputs", inputs);
      this.dropDownChoices = inputs;
      //return [...Array(this.ops.length).keys()].map(x => ++x);
    },
  }
}
</script>
