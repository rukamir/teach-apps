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
    <div class="bottom-card">
      <div id="answer-selector">
        <AnswerChoices :GetSelection="SelectedAnswer" :selected="GetSelected" :choices=currentSelection></AnswerChoices>
      </div>
      <div id="choice-selector">
        <div class="top-card">
          <span>Choices</span>
        </div>
        <div class="bottom-card topless-card">
          <div v-for="(ops, index) in selections" :key="index" @click="answerSelectorClicked(index)">
            Set: <span v-for="single in ops" :key="single">{{ single }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#answer-selector {
  width: 60%;
  display: inline-block;
}
#choice-selector {
  width: 40%;
  display: inline-block;
}
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
      currentSelection: ['a', 'b', 'c', 'd', 'e'],
      selections: [
        ['a', 'b', 'c', 'd', 'e'],
        ['f', 'g', 'h', 'i', 'j'],
      ],
      selectionIdx: 0,
      dropDownChoices: [],
    };
  },
  methods: {
    SelectedAnswer(e) {
      const value = e.target.getAttribute('value');
      if (this.answers.length >= this.current) {
        this.answers[this.current - 1] = {
          answer: value,
          selection: this.currentSelection,
        };
      } else {
        this.answers.push({
          answer: value,
          selection: this.currentSelection,
        });
      }

      const {
        selections,
      } = this;
      this.selectionIdx = !this.selectionIdx ? 1 : 0;
      this.currentSelection = selections[this.selectionIdx];
      this.current += 1;
    },
    answerSelectorClicked(e) {
      this.selectionIdx = e;
      this.currentSelection = this.selections[e];
    },
  },
  computed: {
    GetNumberOfInputs() {
      var inputs = this.answers.map((_, ind) => {
        return ind + 1;
      });
      inputs.push(this.answers.length + 1);
      // eslint-disable-next-line
      this.dropDownChoices = inputs;
      return this.dropDownChoices;
    },
    GetSelected() {
      if (this.answers.length >= this.current) {
        // todo: this really should be structured better
        // eslint-disable-next-line
        this.currentSelection = this.answers[this.current - 1].selection;
        return this.answers[this.current - 1].answer;
      } else {
        return "";
      }
    },
  }
}
</script>
