import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import Error404 from "../views/Error404";
import Home from "../views/Home";
import Detail from "../views/Detail";
import Profile from "../views/profile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error404 />
    },
    {
        path: '/detail/:eventId',
        element: <Detail />
    },
    {
        path: '/profile',
        element: <Profile />,
        children: [
            {
                path: 'my-info',
                element: <div>My Info</div>
            },
            {
                path: 'liked-events',
                element: <div>My Liked Events</div>
            }
        ]
    }
]);

const MyRoutes = () => <RouterProvider router={router} />;
export default MyRoutes;