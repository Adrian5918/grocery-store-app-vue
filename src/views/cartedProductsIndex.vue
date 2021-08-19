<template>
  <div class="cart">
  <div v-for="cartedProduct in cartedProducts" v-bind:key="cartedProduct.id">
    <h2> {{ cartedProduct.product.name }} </h2>
    <h3> Price: ${{ cartedProduct.product.price }} </h3>
    <img v-bind:src="cartedProduct.product.image_url">
    <p> User {{ cartedProduct.user_id }} </p>
    <hr>
  </div> 
    <button v-on:click="checkout">Checkout</button>
  </div>
</template>

<style>
img {
  width: 230px;
  height: 200px;
}
</style>

<script>
import axios from "axios";
  export default {
    data: function () {
      return {
        message: "Welcome to Vue.js!!!",
        cartedProducts: [],
      };
    },
    created: function () {
      this.cartIndex();
    },
    methods: {
      cartIndex: function() {
        console.log('showing user cart..');
        axios.get('http://localhost:3000/carted_products').then(response => {
          console.log(response.data);
          this.cartedProducts = response.data;
        })
      },
    checkout: function() {
      console.log('checking out')
      axios.post('http://localhost:3000/orders', {user_id: product_id}).then(response => {
        console.log(response.data);
        })
      }
    },
  };
</script>
