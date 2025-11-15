import axios from 'axios';

const API_URL = 'http://localhost:3000/api/payments';

export const getPaymentHistory = async () => {
  const response = await axios.get(`${API_URL}/history`);
  return response.data;
};


