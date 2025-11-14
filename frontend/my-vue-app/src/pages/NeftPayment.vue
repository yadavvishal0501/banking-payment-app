<template>
  <div class="payment-page">
    <h1>NEFT Payment</h1>
    <p>Enter the details to proceed with NEFT payment.</p>

    <!-- Payment Form -->
    <form @submit.prevent="submitPayment" class="payment-form">
      <div class="form-group">
        <label for="accountNumber">Account Number</label>
        <input
          type="text"
          id="accountNumber"
          v-model="form.accountNumber"
          placeholder="Enter Account Number"
          required
        />
      </div>

      <div class="form-group">
        <label for="beneficiaryName">Beneficiary Name</label>
        <input
          type="text"
          id="beneficiaryName"
          v-model="form.beneficiaryName"
          placeholder="Enter Beneficiary Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="ifscCode">IFSC Code</label>
        <input
          type="text"
          id="ifscCode"
          v-model="form.ifscCode"
          placeholder="Enter IFSC Code"
          required
        />
      </div>

      <div class="form-group">
        <label for="amount">Amount</label>
        <input
          type="number"
          id="amount"
          v-model="form.amount"
          placeholder="Enter Amount"
          required
        />
      </div>

      <button type="submit" class="submit-button">Submit Payment</button>
    </form>

    <!-- Back to Homepage Button -->
    <router-link to="/" class="back-button">Back to Homepage</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "NeftPayment",
  setup() {
    // Reactive form data
    const form = reactive({
      accountNumber: "",
      beneficiaryName: "",
      ifscCode: "",
      amount: "",
    });

    // Submit payment function
    const submitPayment = () => {
      console.log("Payment Details:", form);
      alert("Payment submitted successfully!");
      // Add logic to send the form data to the backend API
    };

    return {
      form,
      submitPayment,
    };
  },
});
</script>

<style>
.payment-page {
  text-align: center;
  padding: 20px;
  position: relative;
  min-height: 100vh;
}

/* Form Styling */
.payment-form {
  max-width: 400px;
  margin: 20px auto;
  text-align: left;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.submit-button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

/* Back to Homepage Button */
.back-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  border-radius: 5px;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.back-button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}
</style>