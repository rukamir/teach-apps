<template>
  <div>
    <div class="display-changer" @click=decreaseDisplay>-</div>
    <div id="display">99</div>
    <div class="display-changer" @click=increaseDisplay>+</div>
  </div>
</template>

<style scoped>
#display {
    display: inline-block;
    max-width: 50%;
    min-width: 30%;
}
.display-changer {
    display: inline-block;
    max-width: 25%;
    min-width: 20%;
}
</style>

<script>
export default {
  name: "QuestionCount",
  components:{
  },
  props: {
  },
  methods: {
    increaseDisplay() {
        console.log("up");
    },
    decreaseDisplay() {
        console.log("down");
    },
  },
}
</script>