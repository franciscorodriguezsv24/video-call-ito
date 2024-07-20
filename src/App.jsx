import { BrowserRouter } from 'react-router-dom'
import { AuthProvider} from './context/Authentication'
import AppRoutes from './components/AppRoutes'
window.global = window;
//import firebase module

//pages components



function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes/>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
