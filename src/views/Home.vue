<template>
  <div class="home">
    <h1> {{ message }} </h1>
    <hr>
    <div v-for="product in products" v-bind:key="product.id">
    
    </div>
    
    <!-- Section-->
    <section class="py-5" 
      <div class="container px-4 px-lg-5 mt-5">
        <div
          class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
        >
          <div class="col mb-5" v-for="product in products">
            <div class="card h-100">
              <!-- Product image-->
              <img v-bind:src="product.image_url"
                class="card-img-top"
                
                alt="..."
              />
              <!-- Product details-->
              <div class="card-body p-4"> {{ product.name }}
                <div class="text-center">
                  <!-- Product name-->
                  
                  <h5 class="fw-bolder"></h5>
                  <!-- Product price-->
                  <p> price: ${{ product.price }} </p>
                </div>
              </div>
              <!-- Product actions-->
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#" v-on:click="addItemToCart(product)"
                    >Add to cart</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer-->
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">
          Copyright &copy; Your Website 2021
        </p>
      </div>
    </footer>
    <!-- Bootstrap core JS-->
    
    <!-- Core theme JS-->
  </div>
</template>


<style scoped>
img {
  width: 230px;
  height: 200px;
}
#home, #p {
  color: red;
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to all of our Fresh produce!",
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
    },
    addItemToCart: function(product) {
      console.log(product)
      axios.post('http://localhost:3000/carted_products', {product_id: product.id}).then(response => {
        console.log(response.data);
      })
    }
  },
};
</script>

