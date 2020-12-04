<template>
  <div>
    <h1>Create an events{{ this.$store.state.events }}</h1>
    <form @submit.prevent="createEvent">
      <label>Select a category</label>
      <select v-model="event.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>

      <h3>name and describle your event</h3>
      <div class="filed">
        <label>title</label>
        <input
          type="text"
          v-model="event.title"
          placeholder="add an event title"
        />
      </div>

      <div class="filed">
        <label>description</label>
        <input
          type="text"
          v-model="event.description"
          placeholder="add an event description"
        />
      </div>

      <div class="filed">
        <h3>where is your event?</h3>
        <label>Location</label>
        <input
          type="text"
          v-model="event.location"
          placeholder="add an event location"
        />
      </div>

      <div class="filed">
        <h3>when is your event?</h3>
        <label>Date</label>
        <datepicker
          type="text"
          v-model="event.date"
          placeholder="add an event date"
        />
      </div>

      <label>Select a time</label>
      <select v-model="event.time">
        <option v-for="time in times" :key="time">{{ time }}</option>
      </select>

      <input type="submit" value="submit" />
    </form>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
  components: {
    Datepicker
  },
  data() {
    const times = [];
    for (let i = 1; i <= 24; i++) {
      times.push(i + ":00");
    }

    return {
      times,
      categories: this.$store.state.categories,
      event: this.createFreshEventObject()
    };
  },
  methods: {
    createEvent() {
      this.$store.dispatch("createEvent", this.event);
      this.event = this.createFreshEventObject();
    },
    createFreshEventObject() {
      const id = Math.floor(Math.random() * 1000000);

      return {
        id: id,
        category: "",
        title: "",
        description: "",
        location: "",
        date: "",
        time: "",
        attendees: []
      };
    }
  }
};
</script>
