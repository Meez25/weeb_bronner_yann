import { publicApi } from "./axios"

export const register_user = async (email: string, password: string) => {
  publicApi.post("users/create/", {
    email: email,
    password: password
  }).then(function(response: any) {
    console.log(response);
  })
    .catch(function(error: any) {
      console.log(error);
    });
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
