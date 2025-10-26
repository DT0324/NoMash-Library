<template>
    <div>
        <h1> Add Book </h1>
        <form @submit.prevent="addBook">
            <div>
                <label for="isbn">ISBN:</label>
                <input type="text" id="isbn" v-model="isbn" required />
            </div>
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name" required />
            </div>
            <button type="submit">Add Book</button>
        </form>
    </div>
</template>

<!-- <script setup>
import { ref } from 'vue'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
const db = getFirestore()

export default {
  name: 'AddBookView'
}
</script> -->