import './styles/App.css'
import { useState } from 'react'
import Home from './pages/Home'
import Post_blog from './pages/Post_blog'  // Add - new posts
import Edit_blog from './pages/Edit_blog'

// Recommended Topics 
import Data from "./topic-pages/Data";
import SelfImprovement from './topic-pages/SelfImprovement';
import Design from "./topic-pages/Design";
import Nature from "./topic-pages/Nature";
import Coding from "./topic-pages/Coding";
import Programming from "./topic-pages/Programming";
import React from "./topic-pages/React";
import Tech from "./topic-pages/Tech";
import Workout from "./topic-pages/Workout";

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserDetailContext from './context/UserDetailContext'

function App() {
  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null
  })
  const router = createBrowserRouter([
    {
      path: '/',
      element: <> <Home/> </>
    },
    {
      path: '/new-post',
      element: <> <Post_blog /> </> // Pass previewTitle state and function to Post_blog
    },
    {
      path: '/edit-blog/:blogId',
      element: <> <Edit_blog /> </>
    },
    {path: '/topics/dataScience', element: <Data/>},
    {path: '/topics/designing', element: <Design/>},
    {path: '/topics/nature', element: <Nature/>},
    {path: '/topics/coding', element: <Coding/>},
    {path: '/topics/programming', element: <Programming/>},
    {path: '/topics/react', element: <React/>},
    {path: '/topics/technology', element: <Tech/>},
    {path: '/topics/workout', element: <Workout/>},
    {path: '/topics/selfImprovement', element: <SelfImprovement/>}
  ])

  return (
    <>
    <UserDetailContext.Provider value= {{userDetails, setUserDetails }}>

    <RouterProvider router={router} />
    </UserDetailContext.Provider>
    </>
  )
}

export default App
