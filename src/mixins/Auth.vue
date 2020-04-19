<script>
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAhmvXuOr8NBFv4LuPhJ3ZpHKOTYUT1xzg",
  authDomain: "tests-a725f.firebaseapp.com",
  databaseURL: "https://tests-a725f.firebaseio.com",
  projectId: "tests-a725f",
  storageBucket: "tests-a725f.appspot.com",
  messagingSenderId: "413417499767",
  appId: "1:413417499767:web:06e0c87e9a458471f26a72"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default {
  mounted () {
    console.log("Auth mounted")
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        console.log('Logged in')
        this.user = user
        await this.setJWT()
      } else {
        console.log('Logged out')
      }
    })
  },

  data () {
    return {
      user: null,
      jwt: null
    }
  },

  methods: {
    async login () {
      var provider = new firebase.auth.GoogleAuthProvider();

      try {
        await firebase.auth().signInWithPopup(provider)
        await this.setJWT()
      } catch (e) {
        console.error(e)
      }
    },
    
    async logout () {
      try {
        await firebase.auth().signOut()
        this.user = null
        this.jwt = null
      } catch (e) {
        console.error(e)
      }
    },

    async setJWT () {
      if (!this.user) return;
      this.jwt = await this.user.getIdToken(true)
    }
  }
}
</script>