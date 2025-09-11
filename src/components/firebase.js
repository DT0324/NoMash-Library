import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'fake-api-key', // 可用任意字符串
  authDomain: 'localhost',
  projectId: 'your-project-id'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

// 连接到本地 Emulator
connectAuthEmulator(auth, 'http://localhost:9099')

export { auth }