<template>
  <div class="event-box">
    <router-link :to="{ name: 'Show', params: { id: event.id } }">
      <h5>title:{{ event.title }} id:{{ event.id }}</h5>
    </router-link>
    <h5>category:{{ event.category }}</h5>
    <h5>description:{{ event.description }}</h5>
    <h5>location:{{ event.location }}</h5>
    <h5>date:{{ event.date }}</h5>
    <h5>time :{{ event.time }}</h5>
    <h5>organizer:{{ event.organizer }}</h5>
  </div>
</template>

<script>
export default {
  props: {
    event: Object
  }
};
</script>

<style scoped>
h2 {
  color: green;
}
.event-box {
  background-color: khaki;
  width: 30%;
  border: gray dotted 1px;
}
</style>
