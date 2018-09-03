<template>
  <div>
    <h2>Playback</h2>
    <b-button :pressed.sync="playing" variant="primary" @click="play()">Toggle Me</b-button>
  </div>
</template>


<script>
export default {
  name: "AnswersPlayback",
  props: [
    "answers"
  ],
  data() {
    return {
      playing: false,
      allAnswers: [],
      indexOfCurrent: 0,
      utterance: null,
      synth: null,
    };
  },
  created() {
    this.allAnswers = this.answers();
    this.utterance = new SpeechSynthesisUtterance();
    this.synth = window.speechSynthesis;
    
    this.utterance.text = this.allAnswers[this.indexOfCurrent];
    this.utterance.onend = () => {
        this.indexOfCurrent += 1;
        this.utterance.text = this.allAnswers[this.indexOfCurrent];
        if (this.playing) {
          this.synth.speak(this.utterance);
        }
    };
  },
  methods: {
    play() {
      if (!this.playing) {
        this.synth.speak(this.utterance);
      }
    },
  },
}
</script>

