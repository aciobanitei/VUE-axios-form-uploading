<template>
  <div>
    <h1>id is {{ $route.params.id }}</h1>

    <ProfileCard />
  </div>
</template>

<script>
import ProfileCard from "@/components/ProfileCard.vue";
export default {
  components: {
    ProfileCard
  }
};
</script>
