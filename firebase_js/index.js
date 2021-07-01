import { firebaseDB } from "./FB.js";
import * as _ from './alert.js'

const sign_email = document.getElementById("sign-email");
const sign_pass = document.getElementById("sign-password");
const re_sign_pass = document.getElementById("re-sign-password");
const signUpBtn = document.getElementById("signUpBtn");
const login_email = document.getElementById("loginEmail");
const login_pass = document.getElementById("loginPassword");
const loginBtn = document.getElementById("loginBtn");

// $(document).ready(function () {
//     $("#loginBtn").click(function () {
//         console.log(firebaseDB.auth().currentUser.email);
//     });
// });

window.onload = () => {
    console.log(firebaseDB.auth());
}



signUpBtn.onclick = () => {
    if(sign_pass.value.trim() != re_sign_pass.value){
            _.alertError();
            return;
    }
    if(sign_email.value == '' || sign_pass == '' ){
        _.alertFillRequest();
        return;
    }
    firebaseDB
    .auth()
    .createUserWithEmailAndPassword(sign_email.value , sign_pass.value)
    .then((userCreated) => {
            const user = userCreated.user;
            return firebaseDB.auth().currentUser.updateProfile({
                displayName : 'vu hai',
                phoneNumber :'0398176703'
            })
    })
    .then((data) => {
        console.log(data);
        return firebaseDB.auth().currentUser.sendEmailVerification();
    })
    .then(() => {
        sign_email.value="";
        sign_pass.value="";
        re_sign_pass.value="";
        _.alertSuccess_signUp();
        $("#login-group").show(500);
        $("#signUp-group").hide(500);
    })
    .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        _.alertError_email().title = errorCode;
        _.alertError_email().text = errorMessage;
        _.alertError_email()

    })
}

loginBtn.onclick = () => {
    if(login_email.value == '' || login_pass == '' ){
        _.alertFillRequest();
        return;
    }
    firebaseDB
    .auth()
    .signInWithEmailAndPassword(login_email.value, login_pass.value)
    .then((userCredential) =>{
        const {user} = userCredential;
        if(user.emailVerified){
            _.alertSuccess_login();
        }
        else{
            _.alertErrorVerify();
        }
    })
    .catch((error) => {
        login_email.value="";
        login_pass.value= "";
        let errorCode = error.code;
        let errorMessage = error.message;
        _.alertError_login().title = errorCode;
        _.alertError_login().text = errorMessage;
        _.alertError_login()
    })
}
