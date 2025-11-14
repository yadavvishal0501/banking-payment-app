<template>
  <div id="app">
    <h1>Welcome to the Banking Payment App</h1>
    <p>Select a payment method below:</p>

    <ul>
      <li>
        <router-link to="/payments/neft" class="payment-link">NEFT Payment</router-link>
      </li>
      <li>
        <router-link to="/payments/rtgs" class="payment-link">RTGS Payment</router-link>
      </li>
      <li>
        <router-link to="/payments/upi" class="payment-link">UPI Payment</router-link>
      </li>
    </ul>

    <!-- Show table only if data exists -->
    <div v-if="paymentData.length > 0" class="payment-data">
      <h2>Payment Data</h2>
      <table>
        <thead>
          <tr>
            <th>Payment ID</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="payment in paymentData" :key="payment.id">
            <td>{{ payment.id }}</td>
            <td>{{ payment.amount }}</td>
            <td>{{ payment.method }}</td>
            <td>{{ payment.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "Homepage",

  setup() {
    const paymentData = ref([]);

    const fetchPaymentData = async () => {
      try {
        // Correct API endpoint
        const response = await axios.get("http://localhost:3000/api/payments/history");
        paymentData.value = response.data;
      } catch (error) {
        console.error("Error fetching payment data:", error);
      }
    };

    onMounted(() => {
      fetchPaymentData();
    });

    return { paymentData };
  }
});
</script>

<style>
#app {
  text-align: center;
  margin-top: 40px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

/* Button effect for payment links */
.payment-link{
  display: inline-block;
  padding: 10px 20px;
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  border-radius: 5px;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.payment-link:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.payment-data {
  margin-top: 20px;
}

table {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
  text-align: left;
}

thead {
  background-color: #007bff;
  color: #fff;
}

th,
td {
  padding: 10px;
  border: 1px solid #ddd;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

tbody tr:hover {
  background-color: #f1f1f1;
}
</style>
