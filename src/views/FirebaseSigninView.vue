<template>
  <h1> Sign In to Your Account</h1>
  <p><input type="text" placeholder="Email" v-model="email"/></p>
  <p><input type="password" placeholder="Password" v-model="password"/></p>
  <p><button @click="login">Login (Authenticate with firebase)</button></p>
  <p>Don't have an account? <router-link to="/register">Register here</router-link></p>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
const email = ref('')
const password = ref('')
const router = useRouter()
const auth = getAuth()
const login = async () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log('User logged in:', data.user)
      router.push('/')
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.error('Error:', errorCode, errorMessage)
    })
}
</script>