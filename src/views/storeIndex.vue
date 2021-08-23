<template>
  <div class="store">
    <h1 class="pilsen">{{ message }}</h1>
    <div v-for="store in stores" v-bind:key="store.id">
      <div class="containerone">
    <h1 class="store"> {{ store.name }} </h1>
    <h1 class="store"> {{ store.address }} </h1>
    <img v-bind:src="store.image_url">
    <hr>
      </div>
      </div>
    </div>
  </div>
</template>

<style>
.store {
  color: rgb(0, 0, 0);
  background-image: linear-gradient(to right, #DECBA4, #3E5151);
  font-family:sans-serif;
}
.pilsen {
  text-align: center;
  color: #b4fd61;
}
</style>

<script>
import axios from "axios";
  export default {
    components: {},
    data: function () {
      return {
        message: "Here are local Grocery stores in the Pilsen area",
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
