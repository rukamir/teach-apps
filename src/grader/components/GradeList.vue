<template>
  <div>
      <h6>Grade List view</h6>
      <div v-for="(val, idx) in generateList()" :key="idx">
        <span>{{`${idx} ${val}`}}</span>
      </div>
  </div>
</template>

<style>
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