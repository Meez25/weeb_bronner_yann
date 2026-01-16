import { instance } from "./axios"

export const register_user = (email: string, password: string) => {
  instance.post("users/create/", {
    email: email,
    password: password
  }).then(function(response: any) {
    console.log(response);
  })
    .catch(function(error: any) {
      console.log(error);
    });
}
