import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Register";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJobs";
import MyPostedJobs from "../pages/MyPostedJob";
import UpdateJob from "../pages/UpdateJob";
import PrivateRoutes from "./PrivateRoutes";
import MyBids from "../pages/MyBids";
import BidRequests from "../pages/BidReques";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <div>Error page</div>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/job/:id",
        element: <PrivateRoutes><JobDetails></JobDetails></PrivateRoutes>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: '/addjob',
        element: <AddJob></AddJob>
      },
      {
        path: '/mypostedjobs',
        element: <PrivateRoutes><MyPostedJobs></MyPostedJobs></PrivateRoutes>
      },
      {
        path: '/updatejob/:id',
        element: <UpdateJob></UpdateJob>,
        loader: ({params}) =>fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
      },
      {
        path: '/mybids',
        element: <PrivateRoutes><MyBids></MyBids></PrivateRoutes>
      },{
        path: '/bidrequest',
        element: <BidRequests></BidRequests>
      }
    ],
  },
]);
