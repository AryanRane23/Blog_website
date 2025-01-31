import './styles/App.css';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Post_blog from './pages/Post_blog'; // Add - new posts
import Edit_blog from './pages/Edit_blog';

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

// Authentication Pages
import Signup from './Authorization/Signup';
import Signin from './Authorization/Signin';

// Context and ProtectedRoute
import UserDetailContext from './context/UserDetailContext';
import ProtectedRoute from './Authorization/ProtectedRoute';

function App() {
  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null,
  });

  const router = createBrowserRouter([
    {
      path: '/signin',
      element: <Signin />,
    },
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/signin',
      element: <Signin />,
    },
    {
      path: '/new-post',
      element: (
        <ProtectedRoute>
          <Post_blog />
        </ProtectedRoute>
      ),
    },
    {
      path: '/edit-blog/:blogId',
      element: (
        <ProtectedRoute>
          <Edit_blog />
        </ProtectedRoute>
      ),
    },
    { path: '/topics/dataScience', element: <Data /> },
    { path: '/topics/designing', element: <Design /> },
    { path: '/topics/nature', element: <Nature /> },
    { path: '/topics/coding', element: <Coding /> },
    { path: '/topics/programming', element: <Programming /> },
    { path: '/topics/react', element: <React /> },
    { path: '/topics/technology', element: <Tech /> },
    { path: '/topics/workout', element: <Workout /> },
    { path: '/topics/selfImprovement', element: <SelfImprovement /> },
  ]);

  return (
    <>
      <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
        <RouterProvider router={router} />
      </UserDetailContext.Provider>
    </>
  );
}

export default App;
