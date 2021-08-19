<template>
  <div class="store">
    <h1>{{ message }}</h1>
    <div v-for="store in stores" v-bind:key="store.id">
    <h1> {{ store.name }} </h1>
    <h1> {{ store.address }} </h1>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
  export default {
    data: function () {
      return {
        message: "Here are local Grocery stores in the pilsen area",
        stores: [],
      };
    },
    created: function () {
      this.storeIndex();
    },
    methods: {
      storeIndex: function() {
        console.log('showing local stores');
        axios.get('http://localhost:3000/groceryStores').then(response => {
          console.log(response.data);
          this.stores = response.data;
        })
      }
    },
  };
</script>
