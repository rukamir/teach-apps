<template>
  <div>
    <h2>Playback</h2>
    <h2>{{ ScreenDisplay() }}</h2>
    <b-button variant="primary" @click="play()">Play</b-button>
    <b-button variant="primary" @click="restart()">Restart</b-button>
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
      allAnswers: [''],
      indexOfCurrent: 0,
      utterance: null,
      synth: null,
    };
  },
  created() {
    this.allAnswers = this.allAnswers.concat(this.answers());
    this.utterance = new SpeechSynthesisUtterance();
    this.synth = window.speechSynthesis;
    
    this.utterance.onend = () => {
      this.SetNextSpoken();
      this.Speak(this.utterance);
    };
  },
  methods: {
    play() {
      this.playing = !this.playing;
      if (this.playing) {
        this.SetNextSpoken();
        this.Speak(this.utterance);
      }
    },
    restart() {
      this.playing = false;
      this.indexOfCurrent = 0;
    },
    ScreenDisplay() {
      var question = this.indexOfCurrent;
      var answer = this.allAnswers[this.indexOfCurrent];
      return `${question} ${answer}`;
    },
    SetNextSpoken() {
      const atEnd = !(this.indexOfCurrent < this.allAnswers.length - 1);
      this.playing = !atEnd && this.playing;
      if (this.playing) {
        this.indexOfCurrent += !atEnd ? 1 : 0;
        this.utterance.text = `${this.indexOfCurrent} ${this.allAnswers[this.indexOfCurrent]}`;
      }
    },
    Speak(utterance) {
      if (this.playing) {
        this.synth.speak(utterance);
      }
    },
  },
}
</script>

