// // /src/services/api.js

// const BASE_URL = 'http://localhost:5500';

// const api = {
//   get: async (endpoint) => {
//     try {
//       const response = await fetch(`${BASE_URL}${endpoint}`);
//       if (!response.ok) {
//         throw new Error(`Error: ${response.statusText}`);
//       }
//       return response.json();
//     } catch (error) {
//       console.error('Error fetching data:', error.message);
//       throw error;
//     }
//   },
//   post: async (endpoint, data) => {
//     try {
//       const response = await fetch(`${BASE_URL}${endpoint}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });
//       if (!response.ok) {
//         throw new Error(`Error: ${response.statusText}`);
//       }
//       return response.json();
//     } catch (error) {
//       console.error('Error posting data:', error.message);
//       throw error;
//     }
//   },
// };

// export default api;
