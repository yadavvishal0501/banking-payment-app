<!-- filepath: d:\SFMS\banking-payment-app-2\frontend\my-vue-app\src\components\PaymentTable.vue -->
<template>
  <div>
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
        <tr v-for="payment in payments" :key="payment.id">
          <td>{{ payment.id }}</td>
          <td>{{ payment.amount }}</td>
          <td>{{ payment.method }}</td>
          <td>{{ payment.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { getPaymentHistory } from '../services/api';

export default defineComponent({
  setup() {
    const payments = ref([]);

    onMounted(async () => {
      payments.value = await getPaymentHistory();
    });

    return { payments };
  },
});
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f4f4f4;
}
table, th, td {
  border: 1px solid black;
}

</style>