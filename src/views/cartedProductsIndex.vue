<template>
  <div class="cart">
    <h1 class="cartMessage"> Here is your online cart</h1>
  <div v-for="cartedProduct in cartedProducts" v-bind:key="cartedProduct.id" id="container">
    <h2> {{ cartedProduct.product.name }} </h2>
    <h3> Price: ${{ cartedProduct.product.price }}.00 </h3>
    <img v-bind:src="cartedProduct.product.image_url">
    <hr>
    
  </div> 
    <button v-on:click="checkout" class="checkout">Place order</button>
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
      var params = {"user_id": localStorage.user_id}
      axios.post('http://localhost:3000/orders', params).then(response => {
        console.log(response.data);
        this.$router.push("/thankYou")
        console.log(localStorage.user_id)
        })
      }
    },
  };
</script>

<style scoped>
.cart {
  text-align: center;
}
#container {
  display: grid;
    grid-template-columns: 1fr 150px 1fr;
    grid-template-rows: 2fr 20px;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
}
.checkout {
  color: rgb(247, 247, 247);
  width: 500px;
  height: 50px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  border: solid 0px;
  border-radius: 100px;
  background-image: url("https://previews.123rf.com/images/crisagperez/crisagperez1309/crisagperez130900027/23129640-much-fuit.jpg");
  font-size: 30px;
}
h2{
  font-size: 60px;
  margin-top: 20px;
  text-shadow: 2px 2px #c3f023;
}

h1 {
  color: rgb(84, 243, 84);
  letter-spacing: 3px;
  font-family: 'Courier New', Courier, monospace;
}

.cart {
  background: rgb(226, 248, 197);
}

</style>
