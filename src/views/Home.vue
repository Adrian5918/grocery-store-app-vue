<template>
  <div class="home">
    <h1> {{ message }} </h1>
    <hr>
    <div v-for="product in products" v-bind:key="product.id">
    <h1> Item: {{ product.name }} </h1>
    <h2 id="p"> Price: ${{ product.price }} </h2>
    <img v-bind:src="product.image_url">
    <hr>
    </div>
  </div>
</template>


<style scoped>
img {
  width: 230px;
  height: 200px;
}
#home ,#p {
  color: red;
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to all of our Products!",
      products: [],
    };
  },
  created: function() {
    this.productsIndex();
  },
  methods: {
    productsIndex: function() {
      console.log('showing all products');
      axios.get('http://localhost:3000/products').then(response => {
        console.log(response.data);
        this.products = response.data;
      })
    }
  },
};
</script>

