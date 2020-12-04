<template>
  <div>
    <h1>this is eventlist page</h1>
    <EventCard v-for="event in events" :key="event" :event="event" />
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js";

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    };
  },
  created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data;
      })
      .catch(error => {
        console.log("there was an error:" + error.response);
      });
  }
};
</script>
