<template>
  <div>
    <UserProfile />
  </div>
</template>

<script>
import UserProfile from "@/components/UserProfile.vue";

export default {
//   data() {
//     return {
//       token: this.$Cookies.get("token"),
//     };
//   },
  name: "userprofile",
  components: {
    UserProfile,
  },
};
</script>