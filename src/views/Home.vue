<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="SelectWinner()">Select a Winner</button>
    <p>
      {{winner}}
    </p>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import axios from 'axios'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data: () => ({
    names: null,
    winner: null
  }),
  mounted() {
    this.FetchData();
  },
  methods: {
      FetchData: function() {
          var app = this;
          axios.get("/api_example/").then(response => {
              app.names = response.data.names;
          });
      },
      SelectWinner: function() {
        var winner = this.names[Math.floor(Math.random()*this.names.length)];
        this.winner = winner;
      },
  }
}
</script>
