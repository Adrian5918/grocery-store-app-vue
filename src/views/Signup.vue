<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="newUserParams.name" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" v-model="newUserParams.email" />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" v-model="newUserParams.address" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="newUserParams.password" />
      </div>
      <div>
        <label>Password Confirmation:</label>
        <input type="password" v-model="newUserParams.password_confirmation" />
      </div>
      <input type="submit" value="Submit" class="submit"/>
    </form>
  </div>
</template>
<style>
.signup, .login {
background-color: #00DBDE;
background-image: linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%);
text-align: center;

}
h1 {
  border: solid white;
  background-color: rgb(0, 0, 0);
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
ul {
  margin-top: 100px;

}
label {
  font-family: Georgia, 'Times New Roman', Times, serif;
  border: solid black 2px;
  background-color: white;
  padding: 10px;
  margin: 10px;
  font-size: 15px;
}
.submit {
  font-size: 25px;
  margin-top: 15px;
  border: solid;
  border-radius: 100px;
}
</style>
<script>
  import axios from "axios";

  export default {
    data: function () {
      return {
        newUserParams: {},
        errors: [],
      };
    },
    methods: {
      submit: function () {
        axios
          .post("/users", this.newUserParams)
          .then((response) => {
            console.log(response.data);
            this.$router.push("/login");
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      },
    },
  };
</script>
