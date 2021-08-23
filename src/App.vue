<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container px-4 px-lg-5">
        <a class="navbar-brand">Fresher Produce</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
            <li class="nav-item"><a class="nav-link" href="/signup">Signup</a></li>
            <li class="nav-item"><a class="nav-link" href="/login">Login</a></li>
            <li class="nav-item"><a class="nav-link" href="/logout">Logout</a></li>
            <li class="nav-item"><a class="nav-link" href="/storeIndex">Local stores</a></li>
          </ul>
            <button class="btn btn-outline-dark"><a class="nav-link" href="/cartedProductsIndex">
              <i class="bi-cart-fill me-1"></i>Cart</a>
              <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
            </button>
          
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
.navbar-brand {
  font-family: cursive;
  font-size: 30px;
  letter-spacing: 1px;
  border: solid 1px;
  background-color: rgb(13, 245, 44);
  border-radius: 100px 20px 100px 20px;
  margin-bottom: 15px;
  margin-right: 25px;
  width: 115px;
}

.nav-item {
  border: solid rgb(0, 0, 0) 2px;
  border-radius: 90px 30px 100px 30px;
  background-color: rgb(190, 252, 243);
}

.container {
  background-color:rgb(196, 253, 189);
}
</style>


