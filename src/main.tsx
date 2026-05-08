import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { ToastContainer } from 'react-toastify'
import App from '@/App'
import '@/index.css'
import 'react-toastify/dist/ReactToastify.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
    <ToastContainer 
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  </BrowserRouter>
)