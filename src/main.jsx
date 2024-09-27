import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Posts from './routes/Posts.jsx'
import NewPost from './routes/NewPost.jsx'
import RootLayout from './routes/RouteLayout.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        children: [{path: '/create-post', element: <NewPost />}]
      },
      {
        path: '/create-post',
        element: <NewPost />,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
