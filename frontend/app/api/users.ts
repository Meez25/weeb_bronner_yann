import { protectedApi, publicApi } from "./axios"

interface RegisterData {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

export const register_user = async (data: RegisterData) => {
  const response = await publicApi.post("users/create/", data);
  return response.data;
}

export const login_user = async (email: string, password: string) => {
  const response = await publicApi.post("token/", {
    email: email,
    password: password
  });

  const accessToken = response.data.access;
  const refreshToken = response.data.refresh;

  localStorage.setItem("access_token", accessToken);
  localStorage.setItem("refresh_token", refreshToken);

  return response.data;
}

export const me = async () => {
  const response = await protectedApi.get("users/me/")
  return response.data
}
