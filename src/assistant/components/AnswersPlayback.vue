<template>
  <div id="playback-main">
    <div id="display-section">
      <div class="top-card heading-card">Playback</div>
      <div class="bottom-card topless-card">{{ ScreenDisplay() }}</div>
    </div>
    <div>
      <div class="top-card heading-card">Progress</div>
      <div class="bottom-card topless-card">
        <b-progress :value="indexOfCurrent" :max="allAnswers.length -1"></b-progress>
      </div>
    </div>
    <div>
      <div class="top-card heading-card">Controls</div>
      <div class="bottom-card topless-card">
        <div>
          <input type="range" min="0.9  " max="1.5" step="0.05" v-model="rate">
        </div>
        <div>
          <b-button variant="primary" @click="play()" :disabled="this.atEnd">Play</b-button>
          <b-button variant="primary" @click="restart()">Restart</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

#playback-main {
  max-width: 700px;
}
</style>

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
      rate: 1.0,
      utterance: null,
      synth: null,
      atEnd: false,
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
      this.atEnd = false;
    },
    ScreenDisplay() {
      var question = this.indexOfCurrent;
      var answer = this.allAnswers[this.indexOfCurrent];
      return `${question} ${answer}`;
    },
    SetNextSpoken() {
      this.atEnd = !(this.indexOfCurrent < this.allAnswers.length - 1);
      this.playing = !this.atEnd && this.playing;
      if (this.playing) {
        this.indexOfCurrent += !this.atEnd ? 1 : 0;
        this.utterance.text = `${this.indexOfCurrent} ${this.allAnswers[this.indexOfCurrent]}`;
      }
    },
    Speak(utterance) {
      if (this.playing) {
        utterance.rate = this.rate;
        this.synth.speak(utterance);
      }
    },
  },
}
</script>

