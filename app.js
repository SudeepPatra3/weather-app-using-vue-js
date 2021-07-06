new Vue({
  el: "#app",
  data() {
    return {
      con: [],
      place: "London",
      hour: "",
      minute: "",
    };
  },
  created() {
    this.loaddata();
    this.time();
  },
  updated() {
    this.loaddata();
  },

  methods: {
    loaddata() {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.place}&appid=d1c10de4aa956fbf53bfcf8c23d91d5f`
        ) //4ec11db23b6a7d4cd4656e78bbd96ac2
        .then((response) => {
          this.con = response.data;
          this.temp = response.data.main.temp;
        });
    },
    time() {
      var times = new Date();
      this.hour = times.getHours();
      this.minute = times.getMinutes();
    },
  },
});
Vue.filter("custom_temp", function (value) {
  return Math.round(value - 273);
});
