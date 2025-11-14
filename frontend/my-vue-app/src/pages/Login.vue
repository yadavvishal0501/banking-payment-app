<template>
  <div class="login-container">
    <h1>Login</h1>

    <form @submit.prevent="loginUser" class="login-form">
      <label>Email</label>
      <input type="email" v-model="email" required />

      <label>Password</label>
      <input type="password" v-model="password" required />

      <button type="submit">Login</button>
    </form>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LoginPage",

  setup() {
    const email = ref("");
    const password = ref("");
    const errorMessage = ref("");
    const router = useRouter();

   const loginUser = async () => {
  try {
    const response = await axios.post("http://localhost:3000/api/auth/login", {
      email: email.value,
      password: password.value
    });

    alert("Login Successful!");
    router.push("/");  

  } catch (error) {
    alert("Invalid Credentials");
  }
};

    return {
      email,
      password,
      errorMessage,
      loginUser,
    };
  },
});
</script>

<style>
.login-container {
  width: 350px;
  margin: 50px auto;
  text-align: left;
}

h1 {
  text-align: center;
}

.login-form {
  display: flex;
  flex-direction: column;
}

input {
  padding: 10px;
  margin-bottom: 12px;
  font-size: 16px;
}

button {
  padding: 10px;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-weight: 600;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>
