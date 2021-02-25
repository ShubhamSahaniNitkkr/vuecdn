const app = Vue.createApp({
  data() {
    return {
      firstName: "Shubham",
      lastName: "Sunny",
      email: "Shubhamsahaninitkkr@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    async changeUser() {
      const res = await fetch("https://randomuser.me/api");
      const {
        results: { 0: user },
      } = await res.json();

      this.firstName = user.name.first;
      this.lastName = user.name.last;
      this.email = user.email;
      this.gender = user.gender;
      this.picture = user.picture.large;
    },
  },
});
app.mount("#app");
