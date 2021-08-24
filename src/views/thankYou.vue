<template>
  <div class="thankYou">
    <h1 id="ty">{{ message }}</h1>
    <h2 class="thanks"> Thank you for shopping with <strong class="fresh>">Fresher</strong> Groceries!</h2>
    <h3 class="h33"> Your fresh produce delivery will be arriving at the end of day</h3>
    <p class="time">Date & Time now: {{currentDateTime()}}</p>
    <button class="homety">
    <router-link to="/">Home page</router-link>
    </button>
  </div>
  <button v-
</template>

<style>
#ty {
  color:coral;
  text-align: center;
  background-color: rgb(186, 210, 253);
}

strong {
  color: green;
}
.thankYou, .homety {
  text-align: center;
}
.homety {
  color: black;
  width: 200px;
  height: 40px;
  border: solid 1px;
  border-radius: 90px;
  margin-top: 100px;
  margin-bottom: 20px;
}
.thankYou {
  background-color: rgb(228, 255, 255);
  height: 100%;
}
.thanks {
  text-align: center;
}
.h33 {
  text-align: center;
}
.time{
  text-align: center;
  font-size: 20px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  letter-spacing: 1px;
}
</style>

<script>
import axios from "axios";
  export default {
    data: function () {
      return {
        message: "Thank you for your order!",
      };
    },
    created: function () {},
    methods: {
      currentDateTime() {
      const current = new Date();
      const date = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
      const time = current.getHours() +  ":" + current.getMinutes()
      const dateTime = date +' '+ time;
      
      return dateTime;
    },
  }
}
</script>
