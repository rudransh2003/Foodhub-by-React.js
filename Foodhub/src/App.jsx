import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'

function App() {
  const router = createBrowserRouter([
    {
      path :"/about",
      element : <About/>
    },
    {
      path :"/",
      element :<Home />
    },
  ])
  return (
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App;
