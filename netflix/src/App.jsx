import React from 'react';
import HomePage from './components/HomePage';
import './index.css';
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import ProfileSelection from './components/ProfileSelection';
import MainPage from './components/MainPage'




function App() {

  const router = createBrowserRouter(createRoutesFromElements(

    <> 

    <Route path = "/" element = {<HomePage />}>

    </Route>

    <Route path = "/profile" element = {<ProfileSelection/>}/>
    <Route path = "/main" element = {<MainPage/>}/>



    
    </>

  ))

  return (
<>
<RouterProvider router={router}/>

</>
  )
}
export default App;
