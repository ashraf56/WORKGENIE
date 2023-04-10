import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Main from './component/Main/Main';
import Statistics from './component/Statistics/Statistics';
import Blog from './component/Blog/Blog';
import AppliedJobs from './component/Applied-Jobs/AppliedJobs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children:[

{
  path:'/', 
  element:<Main></Main>
},
{
  path:'statistics', element: <Statistics></Statistics>
},
{
  path:'blog', element: <Blog></Blog>
},
{
  path:'jobs', element: <AppliedJobs></AppliedJobs>
},




    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>,
)
