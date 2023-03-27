<template>
  <div>
    <h1>{{ nameday }}</h1>
  </div>
</template>

<script>
import NamedayAPI from "@/services/namedayAPI.js";

export default {
  name: "Nameday",
  data() {
    return {
      nameday: "",
      countryCode: "cz",
      timezone: "Europe/Prague",
    };
  },
  methods: {
    getNameday() {
      const namedayAPI = new NamedayAPI("https://api.example.com");
      namedayAPI
        .getToday(this.countryCode, this.timezone)
        .then((response) => {
          this.nameday = response.data.nameday;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getNameday();
  },
};
</script>
