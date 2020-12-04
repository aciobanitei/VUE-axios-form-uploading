<template>
  <div class="event-box">
    <h2>{{ id }}Profile</h2>
    <h2>Name:{{ title }}</h2>
    <h3>age:30years</h3>
    <h3>contact:0303-8700641</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt
      inventore aliquid deleniti recusandae blanditiis maiores sapiente
      consectetur inventore aliquid deleniti recusandae blanditiis maiores
      sapiente consectetur
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "khatib khan",
      id: this.$route.params.id
    };
  }
};
</script>

<style scoped>
h2 {
  color: rgb(35, 0, 82);
}
.event-box {
  background-color: thistle;
  width: 25%;
  border: gray dotted 1px;
}
</style>
