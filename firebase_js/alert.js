 export const alertSuccess_signUp = () => {
   swal({
     title: "Welcome",
     text: "Sign up success !",
     icon: "success",
     button: "Ok",
   });
 }
 export const alertSuccess_login = () => {
  swal({
    title: "Welcome",
    text: "Login success !",
    icon: "success",
    button: "Ok",
  });
}
export const alertFillRequest = () => {swal({
  title: "Email or password must be fill",
  text: "Please try again!",
  icon: "error",
  button: "Ok",
});}
 export const alertError = () => {swal({
   title: "Wrong password!",
   text: "Pleas try again!",
   icon: "error",
   button: "Ok",
 });}
 export const alertError_email = () => {swal({
  title: "Email already exists",
  text: "Pleas try again!",
  icon: "error",
  button: "Ok",
});}
export const alertErrorVerify = () => {swal({
  title: "Email not verified!",
  text: "Pleas verify your email!",
  icon: "error",
  button: "Ok",
});}
