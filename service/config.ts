// import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

// const http: AxiosInstance = axios.create({
//   baseURL: "https://store.go-clothes.uz/v1"
// });

// http.interceptors.request.use(
//   (config: AxiosRequestConfig) => {
//     if (typeof window !== "undefined" && localStorage) {
//       const accessToken = localStorage.getItem("access_token");
//       if (accessToken) {
//         config.headers = {
//           ...config.headers,
//           Authorization: `Bearer ${accessToken}`
//         };
//       }
//     }
//     return config;
//   },
//   (error: AxiosError) => Promise.reject(error)
// );

// // Access tokenni yangilash funktsiyasi
// async function refreshAccessToken(): Promise<string | null> {
//   try {
//     if (typeof window === "undefined" || !localStorage) {
//       throw new Error("localStorage not available.");
//     }

//     const refreshToken = localStorage.getItem("refresh_token");
//     if (!refreshToken) {
//       throw new Error("Refresh token not found.");
//     }

//     const response = await axios.get<{ access_token: string; refresh_token: string }>(
//       `https://store.go-clothes.uz/v1/token/${refreshToken}`
//     );
//     const { access_token, refresh_token } = response.data;

//     localStorage.setItem("access_token", access_token);
//     localStorage.setItem("refresh_token", refresh_token);

//     return access_token;
//   } catch (error) {
//     console.error("Error refreshing access token:", error);
//     return null;
//   }
// }

// // Javob interceptorini qo'shish
// http.interceptors.response.use(
//   (response: AxiosResponse) => response,
//   async (error: AxiosError) => {
//     if (error.response && error.response.status === 401) {
//       const accessToken = await refreshAccessToken();
//       if (accessToken) {
//         const originalRequest = error.config;
//         if (originalRequest && originalRequest.headers) {
//           originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
//         }
//         return http(originalRequest);
//       } else {
//         console.error("Failed to refresh access token. Redirecting to login page...");
//         return Promise.reject(error);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// export default http;


import axios, { AxiosInstance } from 'axios';

const http: AxiosInstance = axios.create({
  baseURL: 'https://store.go-clothes.uz/v1',
});

export default http;
