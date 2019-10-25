<template>
  <div>
    <h1>Welcome to My Awesome App</h1>
    <div id="firebaseui-auth-container"></div>
    <div id="loader">Loading...</div>
  </div>
</template>

<script>
const firebase = require("firebase/app");
const firebaseui = require("firebaseui");
const provider = new firebase.auth.GoogleAuthProvider();

export default {
  data() {
    return {};
  },
  created() {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        console.log(result);
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  },
  mounted() {
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword("jlp0328@gmail.com", "jamielyn")
    //   // firebase
    //   //   .auth()
    //   //   .createUserWithEmailAndPassword("jlp0328@gmail.com", "jamielyn")
    //   .then(user => {
    //     console.log(user);
    //   })
    //   .catch(err => {
    //     alert(err.message);
    //   });
    // const v = this;
    // if (typeof window !== "undefined") {
    //   if (window.firebaseAuthUi) {
    //     document.getElementById(v.id).append(window.firebaseAuthUi.F.a);
    //     v.loading = false;
    //   } else {
    //     window.firebaseAuthUi = new firebaseui.auth.AuthUI(v.$auth);
    //     const uiConfig = {
    //       callbacks: {
    //         signInSuccessWithAuthResult: function(authResult, redirectUrl) {
    //           // User successfully signed in.
    //           // Return type determines whether we continue the redirect automatically
    //           // or whether we leave that to developer to handle.
    //           return true;
    //         },
    //         uiShown: function() {
    //           // The widget is rendered.
    //           // Hide the loader.
    //           document.getElementById("loader").style.display = "none";
    //         }
    //       },
    //       // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    //       signInFlow: "popup",
    //       signInSuccessUrl: "<url-to-redirect-to-on-success>",
    //       signInOptions: [
    //         { provider: window.firebase.auth.EmailAuthProvider.PROVIDER_ID },
    //         // List of OAuth providers supported.
    //         window.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //         window.firebase.auth.FacebookAuthProvider.PROVIDER_ID
    //       ],
    //       // Terms of service url.
    //       tosUrl: "<your-tos-url>",
    //       // Privacy policy url.
    //       privacyPolicyUrl: "<your-privacy-policy-url>"
    //     };
    //     window.firebaseAuthUi.start("#firebaseui-auth-container", uiConfig);
    //   }
    // }
  }
};
</script>

<style lang="scss" scoped>
</style>