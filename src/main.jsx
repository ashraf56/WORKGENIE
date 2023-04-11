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
import JobDetail from './component/Main/FeatureJobs/JobDetail';
import { Jobloder } from './component/Jobloder';
import ErrorPage from './component/Errorpage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<ErrorPage/>,
    children:[

      {
        path:'/', 
        element:<Main></Main>,
        loader: () => fetch('/JobData.json')
      },

{
  path:'main', 
  element:<Main></Main>,
  loader: () => fetch('/JobData.json')
},
{
  path:'main/:id', 
  element:<JobDetail></JobDetail>,
  loader: () => fetch('/JobData.json')
},
{
  path:'statistics', element: <Statistics></Statistics>
},
{
  path:'blog', element: <Blog></Blog>
},
{
  path:'jobs', element: <AppliedJobs></AppliedJobs>,
  loader: Jobloder
},





    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>,
)
