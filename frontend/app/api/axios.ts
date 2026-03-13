import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api/"

const publicApi = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: "application/json"
  }
});

const protectedApi = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: "application/json"
  }
});

protectedApi.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access_token")

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

protectedApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refresh_token");

        if (!refreshToken) {
          console.error("Refresh token non trouvé, déconnexion")
          window.location.href = '/connexion'
          return Promise.reject(error)
        }

        const response = await axios.post(
          `${API_URL}token/refresh/`, {
          refresh: refreshToken
        }
        )

        const newAccessToken = response.data.access;

        localStorage.setItem("access_token", newAccessToken)

        protectedApi.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${newAccessToken}`
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`
        return protectedApi(originalRequest)
      } catch (refreshError) {
        console.error("Impossible de refraichir le token: ", refreshError)
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")

        window.location.href = "/connexion"

        return Promise.reject(refreshError)
      }
    }
  }
)

export { protectedApi, publicApi }
