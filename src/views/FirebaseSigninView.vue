<template>
  <!-- Page container with vertical padding -->
  <div class="container py-5">
    <div class="row justify-content-center">
      <!-- Responsive column: full width on mobile, centered on larger screens -->
      <div class="col-12 col-md-8 col-lg-6">
        <!-- Bootstrap card for visual clarity and separation -->
        <div class="card shadow-sm rounded">
          <div class="card-body">
            <!-- Page title -->
            <h4 class="card-title text-center mb-4">Welcome to Aura Please Login</h4>

            <!-- Username input field -->
            <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                id="username"
                class="form-control"
                v-model="form.username"
                placeholder="Please input your username"
              />
            </div>

            

            <!-- Password input field -->
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                id="password"
                class="form-control"
                v-model="form.password"
                @input="validatePassword"
                placeholder="Password"
              />
              <!-- Password validation error -->
              <div v-if="errors.password" class="text-danger mt-1">{{ errors.password }}</div>
            </div>

            <!-- Submit button -->
            <button class="btn btn-success w-100" @click="submitForm">
              Login
            </button>
            <!--Register link-->
            <div class="text-center mt-3">
              <router-link to="/register">Don't have an account? Register here.</router-link>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// Import Vue's reactive reference
import { ref } from 'vue'

// Form data model
const form = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  mood: ''
})

// Error messages for password validation
const errors = ref({
  password: null,
  confirmPassword: null
})

// Validate password complexity and match
const validatePassword = () => {
  const pwd = form.value.password
  const confirm = form.value.confirmPassword
  const hasUpper = /[A-Z]/.test(pwd)
  const hasLower = /[a-z]/.test(pwd)
  const hasNumber = /\d/.test(pwd)

  // Password complexity check
  if (pwd.length < 8 || !hasUpper || !hasLower || !hasNumber) {
    errors.value.password = 'Password must be at least 8 characters and include uppercase, lowercase, and numbers.'
  } else {
    errors.value.password = null
  }

  // Password match check
  errors.value.confirmPassword =
    pwd !== confirm ? 'Passwords do not match.' : null
}

// Handle form submission
const submitForm = () => {
  validatePassword()
  if (!errors.value.password && !errors.value.confirmPassword) {
    alert('🎉 Registration successful! Welcome to this supportive space.')
    // TODO: Add API call or local storage logic here
  }
}
</script>

<style scoped>
/* Error message styling */
.text-danger {
  color: #dc3545;
}
</style>