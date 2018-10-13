<template>
  <div>
    <div class="grade-group" v-for="(val, idx) in generateList()" :key="idx">
      <span class="count-wrong">{{ idx }}</span><span class="grade-value">{{ val }}</span>
    </div>
  </div>
</template>

<style>
.grade-group {
  margin: 0.5em 0.5em 0.5em 0.5em;
  font-size: 1.45em;
}
.count-wrong {
  color: red;
  margin-right: 0.75em;
  font-weight: 1000;
}
.grade-value {
  color: rgb(0, 192, 0);
}
</style>

<script>
export default {
  name: "GradeList",
  components: {
  },
  props: [
    "total",
  ],
  methods: {
    generateList() {
      return Array(this.total + 1)
        .fill()
        .map((_, idx) => Math.round(100 - ((idx / this.total) * 100)));
    },
  },
}
</script>