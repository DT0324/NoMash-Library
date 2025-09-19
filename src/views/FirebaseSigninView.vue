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
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { useRouter } from 'vue-router'
const db = getFirestore()
const email = ref('')
const password = ref('')
const router = useRouter()
const auth = getAuth()
const login = async () => {
  try {
    const data = await signInWithEmailAndPassword(auth, email.value, password.value)
    const user = data.user
    console.log('User logged in:', user)

    const userDoc = await getDoc(doc(db, 'users', user.uid))
    if (userDoc.exists()) {
      const role = userDoc.data().role
      console.log('User role:', role)

      if (role === 'admin') {
        router.push('/admin')
      } else {
        router.push('/')
      }
    } else {
      console.warn('No role info found for user')
      router.push('/')
    }
  } catch (error) {
    console.error('Error:', error.code, error.message)
  }
}
</script>