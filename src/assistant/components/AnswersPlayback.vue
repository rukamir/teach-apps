<template>
  <div id="playback-main">
    <div id="display-section">
      <div class="top-card heading-card">Playback</div>
      <div class="bottom-card topless-card playback-display">{{ ScreenDisplay() }}</div>
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
          <span>Speed: </span><input type="range" min="0.9  " max="1.5" step="0.05" v-model="rate">
        </div>
        <div v-if=!atEnd>
          <span @click="play()">
            <v-icon v-if=!playing name="regular/play-circle" scale="4" label="Play" />
            <v-icon v-else name="regular/pause-circle" scale="4" label="Play" />
          </span>
          <span @click="restart()">
            <v-icon name="regular/stop-circle" scale="4" label="Stop" />
          </span>
        </div>
      <div v-else>
        <span @click="restartAndPlay()">
          <v-icon name="regular/play-circle" scale="4" label="Play" />
        </span>
      </div>
      </div>
    </div>
  </div>
</template>

<style>
.playback-display {
  font-size: 2em;
}
#playback-main {
  max-width: 700px;
}
</style>

<script>
import 'vue-awesome/icons/regular/play-circle.js';
import 'vue-awesome/icons/regular/pause-circle.js';
import 'vue-awesome/icons/regular/stop-circle.js';

export default {
  name: "AnswersPlayback",
  props: [
    "answers"
  ],
  components: {
  },
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
    restartAndPlay() {
      this.restart();
      this.play();
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

