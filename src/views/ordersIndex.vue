<template>
  <div class="order">
      <h1 class="messageOrder"> {{ message }} </h1>
    <div v-for="order in orders" v-bind:key="order.id">
      
      <h2> Order number: #{{ order.id }} </h2>
      <h2> Tax: {{ order.tax }} </h2>
      <h2> Subtotal: {{ order.subtotal }} </h2>
      <h2> total: {{ order.total }} </h2>
      <button v-on:click="checkout"> Place order </button>
    </div> 
  </div>
</template>

<style>
img {
  width: 230px;
  height: 200px;
}
.messageOrder {
  text-align: center;
}
</style>

<script>
import axios from "axios";
  export default {
    data: function () {
      return {
        message: "Here is your current unfulfilled order",
        orders: [],
      };
    },
    created: function () {
      console.log('created');
      this.ordersIndex();
    },
    methods: {
      ordersIndex: function() {
        console.log('showing user order..');
        axios.get('http://localhost:3000/orders').then(response => {
          console.log(response.data);
          this.orders = response.data;
        })
      },
    },
    checkout: function() {
      console.log('checking out')
      axios.post('http://localhost:3000/orders').then(response => {
        console.log(response.data);
        
      })
    },
  };
</script>
