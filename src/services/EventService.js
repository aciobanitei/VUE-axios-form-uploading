import axios from "axios";
const apiClient = axios.create({
  baseURL: "http://localhost:3000"
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },
  getEvent(id) {
    return apiClient.get("/events" + id);
  },
  postEvent(event) {
    return apiClient.post("/events", event);
  }
};
