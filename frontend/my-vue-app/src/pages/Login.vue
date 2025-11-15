<template>
  <div class="login-container">
    <h2>Login</h2>

    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />

      <button type="submit">Login</button>
    </form>

    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref("");
    const router = useRouter();

    const login = async () => {
  try {
    const res = await axios.post("http://localhost:3000/api/auth/login", {
      email: email.value,
      password: password.value,
    });

    // Store user session
    localStorage.setItem("userId", res.data.userId);

    router.push("/");
  } catch (e) {
    error.value = "Invalid credentials";
  }
};

    return { email, password, login, error };
    console.log("Email:", email.value);

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
