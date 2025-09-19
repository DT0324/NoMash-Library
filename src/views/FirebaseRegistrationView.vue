<template>
    <h1> Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email"/></p>
    <p><input type="password" placeholder="Password" v-model="password"/></p>
    <p>
    <select v-model="role">
      <option value="user"> user </option>
      <option value="admin"> admin </option>
    </select>
  </p>
    <p><button @click="register">Register (Save to firebase)</button></p>
 

</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
const db = getFirestore()


const email = ref('')
const password = ref('')
const role = ref('user')
const router = useRouter()
const auth = getAuth()
const register = async () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(async (data) => {
      console.log('User created:', data.user)
      await saveUserRole(data.user)
      router.push('/login')
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.error('Error:', errorCode, errorMessage)
    })
}
const saveUserRole = async (user) => {
  await setDoc(doc(db, 'users', user.uid), {
    email: user.email,
    role: role.value 
  })
}


</script>